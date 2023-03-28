import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ugurtigu-layout-feature',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './layout-feature.component.html',
  styleUrls: ['./layout-feature.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutFeatureComponent {}
