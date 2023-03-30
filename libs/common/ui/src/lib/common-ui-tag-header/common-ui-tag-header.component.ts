import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ugurtigu-common-ui-tag-header',
  standalone: true,
  imports: [CommonModule],
  template: ` <h3 class="uppercase text-sm mb-12 font-bold text-accent">
    <ng-content></ng-content>
  </h3>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommonUiTagHeaderComponent {}
