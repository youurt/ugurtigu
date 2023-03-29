import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ugurtigu-home-feature',
  standalone: true,
  imports: [CommonModule],
  template: ` <p>home-feature works!</p> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeFeatureComponent {}
