import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { WritingMainFeatureComponent } from '../writing-main-feature/writing-main-feature.component';

@Component({
  selector: 'ugurtigu-writing-feature-the-five-whys',
  standalone: true,
  imports: [CommonModule, WritingMainFeatureComponent],
  template: `
    <ugurtigu-writing-main-feature> </ugurtigu-writing-main-feature>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WritingFeatureTheFiveWhysComponent {}
