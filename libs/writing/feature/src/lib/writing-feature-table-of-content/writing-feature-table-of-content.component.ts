import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostBinding,
} from '@angular/core';
import { Router } from '@angular/router';

interface WritingFeatureTableOfContentLink {
  type: string | null;
  text: string | null;
  id: string;
}
@Component({
  selector: 'ugurtigu-writing-feature-table-of-content',
  styleUrls: ['./writing-feature-table-of-content.component.scss'],
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav
      class="flex flex-col gap-1 text-xs fixed right-0 top-2/4 px-6 pt-8 bg-base max-w-[250px] c-writing-feature-table-of-content__toc"
    >
      <a
        *ngFor="let link of links"
        (click)="scrollHandler(link.id)"
        [id]="link.id + '-toc'"
        class="cursor-pointer text-ellipsis capitalize c-writing-feature-table-of-content__toc-link"
        [ngClass]="{
          'is-main': link.type === 'h2',
          'ml-2 is-sub': link.type === 'h3'
        }"
      >
        <span>
          {{ link.text }}
        </span>
        <span
          class="c-writing-feature-table-of-content__toc-link-line"
          [ngClass]="{
            'after:w-[32px]': link.type === 'h2',
            'after:w-[24px]': link.type === 'h3'
          }"
        >
        </span>
      </a>
    </nav>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WritingFeatureTableOfContentComponent implements AfterViewInit {
  /**
   * Host class.
   */
  @HostBinding('class.c-writing-feature-table-of-content') hostClass = true;

  /**
   * Holds reference to the table of content links.
   */
  links: WritingFeatureTableOfContentLink[] = [];

  /**
   * @param elRef Element reference.
   * @param viewportScroller Viewport scroller.
   */
  constructor(
    private elRef: ElementRef,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {}

  /**
   * After view init.
   */
  ngAfterViewInit(): void {
    this.generateToc();
    if (this.links.length > 0) {
      this.observeToc();
    }
  }

  /**
   * Observe table of content.
   */
  private observeToc(): void {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log(entry.isIntersecting, entry.target.id);

          if (entry.isIntersecting) {
            const el = document.getElementById(
              entry.target.id + '-toc'
            ) as HTMLElement;
            el.classList.add('text-accent');
          } else {
            const el = document.getElementById(
              entry.target.id + '-toc'
            ) as HTMLElement;
            el.classList.remove('text-accent');
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
   * Extracts table of content from the DOM.
   */
  private generateToc(): void {
    ['section'].forEach((tag) => {
      this.elRef.nativeElement.parentElement
        .querySelectorAll(tag)
        .forEach((elem: Node) => {
          const el = elem as HTMLElement;

          const receivedLinks: WritingFeatureTableOfContentLink = {
            type: (el.firstChild as HTMLHeadingElement).getAttribute(
              'data-role'
            ),
            text: (el.firstChild as HTMLHeadingElement).textContent,
            id: el.id,
          };

          this.links.push(receivedLinks);
          this.cdr.detectChanges();
        });
    });
  }

  /**
   * Scroll to section handler.
   * @param id section id
   */
  public scrollHandler(id: string) {
    this.router.navigate([], { fragment: id });
  }
}
