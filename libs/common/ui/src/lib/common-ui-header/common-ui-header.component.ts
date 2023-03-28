import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ugurtigu-common-ui-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './common-ui-header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommonUiHeaderComponent {}
