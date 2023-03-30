import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ugurtigu-writing-feature-the-two-whys',
  standalone: true,
  imports: [CommonModule],
  template: ` <p>writing-feature-the-two-whys works!</p> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WritingFeatureTheTwoWhysComponent {}
