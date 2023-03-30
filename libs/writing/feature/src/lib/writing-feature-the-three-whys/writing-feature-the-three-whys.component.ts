import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ugurtigu-writing-feature-the-three-whys',
  standalone: true,
  imports: [CommonModule],
  template: ` <p>writing-feature-the-three-whys works!</p> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WritingFeatureTheThreeWhysComponent {}
