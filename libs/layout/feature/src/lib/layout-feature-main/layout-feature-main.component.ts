import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ugurtigu-layout-feature-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './layout-feature-main.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutFeatureMainComponent {}
