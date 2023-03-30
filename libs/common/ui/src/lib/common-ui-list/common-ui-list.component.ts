import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CommonUiButtonComponent } from '../common-ui-button/common-ui-button.component';
import { CommonUiTagHeaderComponent } from '../common-ui-tag-header/common-ui-tag-header.component';

export interface CommonUiListItem {
  date: string;
  title: string;
  routePath?: string;
}

export interface CommonUiListButton {
  routePath?: string;
  text: string;
}

@Component({
  selector: 'ugurtigu-common-ui-list',
  standalone: true,
  imports: [CommonModule, CommonUiButtonComponent, CommonUiTagHeaderComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="animate-fade-in pb-12">
      <ugurtigu-common-ui-tag-header *ngIf="showTitle">{{
        title
      }}</ugurtigu-common-ui-tag-header>
      <ul>
        <li *ngFor="let listItem of listItems" class="block mb-12">
          <time class="font-serif italic font-medium text-grey2 text-md mb-2">{{
            listItem.date
          }}</time>
          <a class="cursor-pointer" (click)="navigate(listItem.routePath)">
            <h3 class="text-3xl font-bold">{{ listItem.title }}</h3>
          </a>
        </li>
      </ul>
      <ugurtigu-common-ui-button
        *ngIf="showNextButton"
        [routePath]="button?.routePath"
        [text]="button?.text"
      ></ugurtigu-common-ui-button>
    </section>
  `,
})
export class CommonUiListComponent {
  /**
   * The constructor of the list section.
   * @param router Router
   */
  constructor(private router: Router) {}

  /**
   * Show the header of the list section.
   */
  @Input() showTitle = true;

  /**
   * Show the next button of the list section.
   */
  @Input() showNextButton = true;

  /**
   * The title of the list section.
   */
  @Input() title?: string;

  /**
   * The list items of the list section.
   */
  @Input() listItems: CommonUiListItem[] = [];

  /**
   * The main route path of the list section.
   */
  @Input() button?: CommonUiListButton;

  /**
   * Navigate to the next button route path.
   * @param routePath The route path of the list item.
   */
  protected navigate(routePath: string | undefined) {
    this.router.navigate([routePath]);
  }
}
