import { CommonModule, ViewportScroller } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'ugurtigu-writing-feature-table-of-content',
  styleUrls: ['./writing-feature-table-of-content.component.scss'],
  standalone: true,
  imports: [CommonModule],
  template: `<div
    #wrapper
    class="flex flex-col gap-8 c-writing-feature-table-of-content__toc"
  ></div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WritingFeatureTableOfContentComponent implements OnInit {
  /**
   * Host class.
   */
  @HostBinding('class.c-writing-feature-table-of-content') hostClass = true;

  /**
   * @param elRef Element reference.
   * @param viewportScroller Viewport scroller.
   */
  constructor(
    private elRef: ElementRef,
    private viewportScroller: ViewportScroller
  ) {}

  /**
   * On init.
   */
  ngOnInit(): void {
    this.generateToc();
    this.observeToc();
  }

  /**
   * Observe table of content.
   */
  private observeToc(): void {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = document.getElementById(
              entry.target.id + '-toc'
            ) as HTMLElement;
            el.classList.add('text-green');
          } else {
            const el = document.getElementById(
              entry.target.id + '-toc'
            ) as HTMLElement;
            el.classList.remove('text-green');
          }
        });
      },
      {
        rootMargin: '-48% 0px',
        threshold: 0,
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });
  }

  /**
   * Generate table of content dynamically from sections.
   * Each section should have an id.
   * Each section should have a header.
   *
   * @example
   * <section id="section-1">
   *  <h1>Section 1</h1>
   * </section>
   *
   * // The above example will generate a link to the section in the corresponding table of content.
   * // The link will be named as the header of the section.
   * // The link will be scrolled to the section when clicked.
   * // The link will be highlighted when the section is in the viewport.
   * // The link will be unhighlighted when the section is not in the viewport.
   */
  private generateToc(): void {
    const wrapperEl = this.elRef.nativeElement.querySelector(
      '.c-writing-feature-table-of-content__toc'
    ) as HTMLElement;

    ['section'].forEach((tag) => {
      this.elRef.nativeElement.parentElement
        .querySelectorAll(tag)
        .forEach((elem: Node) => {
          const el = elem as HTMLElement;
          const a = document.createElement('a');
          const hEl = el.firstChild;
          a.textContent = hEl?.textContent as string;
          a.classList.add('cursor-pointer');
          a.id = el.id + '-toc';
          a.classList.add('toc-link');

          a.addEventListener('click', () => this.handleClick(el));

          wrapperEl.appendChild(a);
        });
    });
  }

  /**
   * Scrolls to the given node.
   * @param node Node to scroll to.
   */
  private handleClick(node: Node | null): void {
    const el = document.getElementById((node as HTMLElement).id) as HTMLElement;
    const header = document.getElementById('header') as HTMLElement;

    this.viewportScroller.scrollToPosition([
      0,
      el.offsetTop - header.offsetHeight - 25,
    ]);
  }
}
