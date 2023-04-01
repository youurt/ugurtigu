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
      class="hidden xl:flex flex-col gap-1 text-xs fixed right-0 top-2/4 pt-8 hover:bg-base max-w-[250px] c-writing-feature-table-of-content__toc"
    >
      <a
        *ngFor="let link of links"
        (click)="scrollHandler(link.id)"
        [id]="link.id + '-toc'"
        class="cursor-pointer truncate capitalize c-writing-feature-table-of-content__toc-link hover:opacity-80"
        [ngClass]="{
          'is-main': link.type === 'h2',
          'ml-2 is-sub': link.type === 'h3',
          'text-accent': link.id === currentSection
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
   * The sections.
   */
  sections: NodeListOf<Element> | undefined;

  /**
   * Current section.
   */
  currentSection?: string;

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
    this.sections = document.querySelectorAll(
      'section:not([data-role="hero"])'
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.currentSection = entry.target.id;
            this.cdr.detectChanges();
          }
        });
      },
      {
        rootMargin: '-48% 0px',
        threshold: 0,
      }
    );

    this.sections.forEach((section) => {
      observer.observe(section);
    });
  }

  /**
   * Extracts table of content from the DOM.
   */
  private generateToc(): void {
    this.elRef.nativeElement.parentElement
      .querySelectorAll('section:not([data-role="hero"])')
      .forEach((elem: Node) => {
        const el = elem as HTMLElement;

        const receivedLinks: WritingFeatureTableOfContentLink = {
          type: (el.firstChild as HTMLHeadingElement).getAttribute('data-role'),
          text: (el.firstChild as HTMLHeadingElement).textContent,
          id: el.id,
        };

        this.links.push(receivedLinks);
        this.cdr.detectChanges();
      });
  }

  /**
   * Scroll to section handler.
   * @param id section id
   */
  public scrollHandler(id: string) {
    this.router.navigate([], { fragment: id });
    this.currentSection = id;
    this.cdr.detectChanges();
  }
}
