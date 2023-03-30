import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  CommonUiCardComponent,
  CommonUiHeroComponent,
  CommonUiListButton,
  CommonUiListComponent,
  CommonUiListItem,
  CommonUiWorkComponent,
} from '@ugurtigu/common/ui';

@Component({
  selector: 'ugurtigu-home-feature',
  standalone: true,
  imports: [
    CommonModule,
    CommonUiHeroComponent,
    CommonUiListComponent,
    CommonUiWorkComponent,
    CommonUiCardComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ugurtigu-common-ui-hero title="Hello, my name is Uğur Tigu.">
      I am a Software Developer based in Frankfurt am Main. <br />
      Currently I'm working at
      <a class="opacity-80 underline" href="https://www.textbroker.de/"
        >textbroker</a
      >
      helping folks level up with Angular, TypeScript and Nest.js.
    </ugurtigu-common-ui-hero>
    <ugurtigu-common-ui-list
      title="Recent Thoughts"
      [listItems]="listItems"
      [button]="listButton"
    ></ugurtigu-common-ui-list>

    <ugurtigu-common-ui-work title="Recent Work" [button]="workButton">
      <!-- @TODO: get this cards from cards-feature and use https://angular.io/api/common/SlicePipe to only show the newsest 2 cards   -->
      <ugurtigu-common-ui-card
        color="bg-contrast"
        title="Card 1"
        subTitle="Card 1 Subtitle"
      >
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, sequi
          reiciendis. Expedita rem in quae labore ipsum error nisi natus libero
          quis soluta modi ad nemo maxime, optio maiores excepturi laboriosam
          facere fugit incidunt aspernatur odit? Ex ad ratione, illo voluptas
          minus neque autem quas esse accusamus dolore odit necessitatibus!
        </div>
      </ugurtigu-common-ui-card>

      <ugurtigu-common-ui-card
        color="bg-blue"
        title="Card 2"
        subTitle="Card 2 Subtitle"
      >
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, sequi
          reiciendis. Expedita rem in quae labore ipsum error nisi natus libero
          quis soluta modi ad nemo maxime, optio maiores excepturi laboriosam
          facere fugit incidunt aspernatur odit? Ex ad ratione, illo voluptas
          minus neque autem quas esse accusamus dolore odit necessitatibus!
        </div>
      </ugurtigu-common-ui-card>
    </ugurtigu-common-ui-work>
  `,
})
export class HomeFeatureComponent {
  /**
   * The list items to be shown.
   */
  listItems: CommonUiListItem[] = [
    {
      date: '2021-01-01',
      title: 'Interesting AI articles',
      routePath: '/contact', // @TODO: replace with some article
    },
    {
      date: '2021-02-01',
      title: 'Interesting Food articles',
      routePath: '/contact', // @TODO: replace with article
    },
  ];

  /**
   * The button for the list.
   */
  listButton: CommonUiListButton = {
    routePath: '/contact', // @TODO: replace with some article
    text: 'More',
  };

  /**
   * The button for the work.
   */
  workButton: CommonUiListButton = {
    routePath: '/work', // @TODO: replace with some article
    text: 'More',
  };
}
