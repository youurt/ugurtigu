import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ugurtigu-work-feature',
  standalone: true,
  imports: [CommonModule],
  template: ` <p>work-feature works!</p> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkFeatureComponent {}
