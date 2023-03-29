import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ugurtigu-layout-feature-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './layout-feature-footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutFeatureFooterComponent {}
