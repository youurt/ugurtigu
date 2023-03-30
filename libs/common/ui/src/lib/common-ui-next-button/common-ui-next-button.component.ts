import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'ugurtigu-common-ui-next-button',
  standalone: true,
  styleUrls: ['./common-ui-next-button.component.scss'],
  imports: [CommonModule, MatIconModule],
  template: `<a
    class="flex items-center gap-1 font-semibold opacity-80 cursor-pointer"
    (click)="navigate(routePath)"
  >
    <span class="capitalize">
      {{ text }}
    </span>
    <mat-icon class="ease-in-out duration-300 c-common-ui-next-button__icon"
      >chevron_right</mat-icon
    >
  </a> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommonUiNextButtonComponent {
  @HostBinding('class.c-common-ui-next-button') hostClass = true;

  /**
   * The constructor of the next button.
   * @param router Router
   */
  constructor(private router: Router) {}

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
