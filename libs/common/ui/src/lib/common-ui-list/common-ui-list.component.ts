import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

export interface CommonUiListItem {
  date: string;
  title: string;
  routePath: string;
}

@Component({
  selector: 'ugurtigu-common-ui-list',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterTestingModule],
  template: `
    <ul>
      <li *ngFor="let listItem of listItems" class="block mb-12">
        <time class="font-serif italic font-medium text-grey2 text-md mb-2">{{
          listItem.date
        }}</time>
        <a [routerLink]="[listItem.routePath]">
          <h3 class="text-3xl font-bold">{{ listItem.title }}</h3>
        </a>
      </li>
    </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommonUiListComponent {
  /**
   * The list items of the list section.
   */
  @Input() listItems: CommonUiListItem[] = [];
}
