import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  CommonUiHeroComponent,
  CommonUiListComponent,
  CommonUiListItem,
} from '@ugurtigu/common/ui';

@Component({
  selector: 'ugurtigu-writing-feature',
  standalone: true,
  imports: [CommonModule, CommonUiHeroComponent, CommonUiListComponent],
  template: `
    <ugurtigu-common-ui-hero title="Writing">
      Essays, learning, and other miscellaneous goodies. Lorem ipsum dolor sit
      amet consectetur adipisicing elit. Error, est culpa quisquam, molestiae
      perspiciatis maiores consectetur amet sapiente inventore hic eius fuga
      omnis dolorem quidem repellendus tempora aspernatur perferendis sed dicta
      voluptate placeat. Voluptate minima illum voluptatum sint, beatae dicta!
    </ugurtigu-common-ui-hero>

    <ugurtigu-common-ui-list
      [showTitle]="false"
      [showNextButton]="false"
      [listItems]="listItems"
    ></ugurtigu-common-ui-list>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WritingFeatureComponent {
  /**
   * The list items of the list section.
   */
  listItems: CommonUiListItem[] = [
    {
      date: 'May 2023',
      title: 'The 5 Whys',
      routePath: '/writing/the-5-whys',
    },
    {
      date: 'May 2020',
      title: 'The 3 Whys',
      routePath: '/writing/the-3-whys',
    },
    {
      date: 'May 2022',
      title: 'The 2 Whys',
      routePath: '/writing/the-2-whys',
    },
  ];
}
