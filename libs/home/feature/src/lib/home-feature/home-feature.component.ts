import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  CommonUiHeroComponent,
  CommonUiListButton,
  CommonUiListComponent,
  CommonUiListItem,
} from '@ugurtigu/common/ui';

@Component({
  selector: 'ugurtigu-home-feature',
  standalone: true,
  imports: [CommonModule, CommonUiHeroComponent, CommonUiListComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ugurtigu-common-ui-hero title="Hello, my name is Uğur.">
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
      [button]="button"
    ></ugurtigu-common-ui-list>
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
   * The button to be shown.
   */
  button: CommonUiListButton = {
    routePath: '/contact', // @TODO: replace with some article
    text: 'More',
  };
}
