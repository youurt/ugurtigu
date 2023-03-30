import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  CommonUiHeaderComponent,
  CommonUiHeaderLink,
} from '@ugurtigu/common/ui';

@Component({
  selector: 'ugurtigu-layout-feature-header',
  standalone: true,
  imports: [CommonModule, CommonUiHeaderComponent],
  template: `<ugurtigu-common-ui-header
    [mainLink]="mainLink"
    [links]="links"
  ></ugurtigu-common-ui-header>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutFeatureHeaderComponent {
  /**
   * The main link to be shown.
   */
  mainLink = '/';

  /**
   * The links to be shown.
   */
  links: CommonUiHeaderLink[] = [
    { name: 'Home', link: '/', exact: true },
    { name: 'Work', link: '/work', exact: false },
    { name: 'Writing', link: '/writing', exact: false },
    { name: 'Contact', link: '/contact', exact: false },
  ];
}
