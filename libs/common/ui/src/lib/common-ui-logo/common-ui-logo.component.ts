import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
} from '@angular/core';

@Component({
  selector: 'ugurtigu-common-ui-logo',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ` <figure class="flex items-center gap-2">
    <svg role="img" width="28" height="28" class="fill-ugurtigu-contrast">
      <rect width="28" height="28" rx="5" ry="5" />
      <circle
        r="4"
        class="fill-ugurtigu-base"
        [attr.cx]="xPos"
        [attr.cy]="yPos"
      ></circle>
    </svg>
    <figcaption>
      <span class="uppercase font-bold">Uğur Tigu</span>
    </figcaption>
  </figure>`,
})
export class CommonUiLogoComponent {
  /**
   * Mouse position on the horizontal axis.
   */
  protected xPos = 15;

  /**
   * Mouse position on the vertical axis.
   */
  protected yPos = 15;

  /**
   * Offset value for the mouse position.
   */
  private offset = 5;

  /**
   * @param event mousemove event
   */
  @HostListener('document:mousemove', ['$event'])
  mouseMove(event: MouseEvent) {
    // Get the mouse position on the horizontal axis
    this.xPos = Number(event.clientX / 100 + this.offset);

    // Get the mouse position on the vertical axis
    this.yPos = Number(event.clientY / 100 + this.offset);
  }
}
