import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ugurtigu-writing-feature-the-five-whys',
  standalone: true,
  imports: [CommonModule],
  template: ` <p>writing-feature-the-five-whys works!</p> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WritingFeatureTheFiveWhysComponent {}
