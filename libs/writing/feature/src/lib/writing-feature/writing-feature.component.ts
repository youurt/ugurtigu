import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ugurtigu-writing-feature',
  standalone: true,
  imports: [CommonModule],
  template: ` <p>writing-feature works!</p> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WritingFeatureComponent {}
