import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

@Component({
  selector: 'ugurtigu-common-ui-next-button',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterTestingModule],
  template: `<a
    class="flex items-center gap-1 font-semibold opacity-80"
    [routerLink]="[routePath]"
  >
    {{ text }}
  </a> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommonUiNextButtonComponent {
  /**
   * The route path of the next button.
   */
  @Input() routePath?: string;

  /**
   * The text of the next button.
   */
  @Input() text?: string;
}
