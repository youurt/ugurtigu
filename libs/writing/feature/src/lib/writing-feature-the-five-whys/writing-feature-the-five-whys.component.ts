import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonDataAccessArticleService } from '@ugurtigu/common/data-access';
import { WritingFeatureTableOfContentComponent } from '../writing-feature-table-of-content/writing-feature-table-of-content.component';
import { WritingMainFeatureComponent } from '../writing-main-feature/writing-main-feature.component';

@Component({
  selector: 'ugurtigu-writing-feature-the-five-whys',
  standalone: true,
  imports: [
    CommonModule,
    WritingMainFeatureComponent,
    WritingFeatureTableOfContentComponent,
  ],
  template: `
    <ugurtigu-writing-main-feature>
      <main class="flex flex-col gap-8 pb-8">
        <div
          class="flex flex-col gap-8"
          *ngFor="let articleStructure of articleStructures$ | async"
        >
          <section [id]="articleStructure.id">
            <h2 class="mb-12">{{ articleStructure.title }}</h2>
            <div [innerHTML]="articleStructure.content"></div>
          </section>
          <section
            *ngFor="let subHeading of articleStructure.subHeadings"
            [id]="subHeading.id"
          >
            <h3 class="mb-12">
              {{ subHeading.title }}
            </h3>
            <div [innerHTML]="subHeading.content"></div>
          </section>
        </div>
      </main>
    </ugurtigu-writing-main-feature>
    <ugurtigu-writing-feature-table-of-content></ugurtigu-writing-feature-table-of-content>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WritingFeatureTheFiveWhysComponent {
  /**
   * Article structures.
   */
  articleStructures$ = this.commonDataAccessArticleService.articleStructures$;

  constructor(
    private commonDataAccessArticleService: CommonDataAccessArticleService
  ) {}
}
