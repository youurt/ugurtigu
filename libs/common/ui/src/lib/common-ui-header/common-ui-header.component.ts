import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { CommonUiLogoComponent } from '../common-ui-logo/common-ui-logo.component';

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
  template: `<header
    class="py-6 sticky top-0 z-10 bg-ugurtigu-base text-ugurtigu-contrast"
  >
    <nav
      class="max-w-[1280px] mx-auto flex justify-between px-4 items-center flex-col gap-4 sm:flex-row sm:gap-0"
    >
      <a [routerLink]="['/']">
        <ugurtigu-common-ui-logo></ugurtigu-common-ui-logo>
      </a>
      <div class="justify-end align-center gap-8 flex">
        <a
          class="c-common-ui-header__link"
          routerLinkActive="active"
          *ngFor="
            let item of [
              { name: 'Home', link: '/', exact: true },
              { name: 'Work', link: '/work', exact: false },
              { name: 'Writing', link: '/writing', exact: false },
              { name: 'Contact', link: '/contact', exact: false }
            ]
          "
          [routerLink]="[item.link]"
          [routerLinkActiveOptions]="{ exact: item.exact }"
        >
          {{ item.name }}
        </a>
      </div>
    </nav>
  </header> `,
})
export class CommonUiHeaderComponent {
  @HostBinding('class.c-common-ui-header') hostClass = true;
}
