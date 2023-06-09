import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonUiButtonComponent } from '../common-ui-button/common-ui-button.component';
import { CommonUiListButton } from '../common-ui-list/common-ui-list.component';
import { CommonUiTagHeaderComponent } from '../common-ui-tag-header/common-ui-tag-header.component';

@Component({
  selector: 'ugurtigu-common-ui-work',
  standalone: true,
  imports: [CommonModule, CommonUiButtonComponent, CommonUiTagHeaderComponent],
  template: `
    <section class="animate-fade-in pt-12">
      <ugurtigu-common-ui-tag-header>{{ title }}</ugurtigu-common-ui-tag-header>
      <main class="flex md:flex-row flex-col gap-8 overflow-auto mb-12">
        <ng-content></ng-content>
      </main>
      <ugurtigu-common-ui-button
        [routePath]="button?.routePath"
        [text]="button?.text"
      ></ugurtigu-common-ui-button>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommonUiWorkComponent {
  /**
   * The title of the work section.
   */
  @Input() title?: string;

  /**
   * The main route path of the work section.
   */
  @Input() button?: CommonUiListButton;
}
