import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

export type CommonUiButtonType = 'next' | 'previous';

@Component({
  selector: 'ugurtigu-common-ui-button',
  standalone: true,
  styleUrls: ['./common-ui-button.component.scss'],
  imports: [CommonModule, MatIconModule],
  template: `
    <a
      class="flex items-center gap-1 font-semibold opacity-80 cursor-pointer hover:opacity-100 hover:text-contrast c-common-ui-button__link"
      (click)="navigate(routePath)"
    >
      <mat-icon
        *ngIf="type === 'previous'"
        class="ease-in-out duration-300 c-common-ui-button__icon c-common-ui-button__icon--previous"
        >chevron_left</mat-icon
      >
      <span class="capitalize">
        {{ text }}
      </span>
      <mat-icon
        *ngIf="type === 'next'"
        class="ease-in-out duration-300 c-common-ui-button__icon c-common-ui-button__icon--next"
        >chevron_right</mat-icon
      >
    </a>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommonUiButtonComponent {
  @HostBinding('class.c-common-ui-button') hostClass = true;

  /**
   * The constructor of the next button.
   * @param router Router
   */
  constructor(private router: Router) {}

  /**
   * The type of the next button.
   */
  @Input() type: CommonUiButtonType = 'next';

  /**
   * The route path of the next button.
   */
  @Input() routePath?: string;

  /**
   * The text of the next button.
   */
  @Input() text?: string;

  /**
   * Navigate to the next button route path.
   * @param routePath The route path of the next button.
   */
  protected navigate(routePath: string | undefined) {
    this.router.navigate([routePath]);
  }
}
