import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { CommonUiLogoComponent } from '../common-ui-logo/common-ui-logo.component';

export interface CommonUiHeaderLink {
  name: string;
  link: string;
  exact: boolean;
}

@Component({
  selector: 'ugurtigu-common-ui-header',
  standalone: true,
  imports: [
    CommonModule,
    CommonUiLogoComponent,
    RouterModule,
    RouterTestingModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./common-ui-header.component.scss'],
  template: `<header class="py-6 sticky top-0 z-10 bg-base text-contrast">
    <nav
      class="max-w-[1280px] mx-auto flex justify-between px-4 items-center flex-col gap-4 sm:flex-row sm:gap-0"
    >
      <a [routerLink]="[mainLink]">
        <ugurtigu-common-ui-logo></ugurtigu-common-ui-logo>
      </a>
      <div class="justify-end align-center gap-8 flex">
        <a
          class="c-common-ui-header__link"
          routerLinkActive="active"
          *ngFor="let link of links"
          [routerLink]="[link.link]"
          [routerLinkActiveOptions]="{ exact: link.exact }"
        >
          {{ link.name }}
        </a>
      </div>
    </nav>
  </header> `,
})
export class CommonUiHeaderComponent {
  @HostBinding('class.c-common-ui-header') hostClass = true;

  /**
   * The main link to be shown.
   */
  @Input() mainLink?: string;

  /**
   * The links to be shown.
   */
  @Input() links: CommonUiHeaderLink[] = [];
}
