import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonUiHeaderComponent } from '@ugurtigu/common/ui';

@Component({
  selector: 'ugurtigu-layout-feature-header',
  standalone: true,
  imports: [CommonModule, CommonUiHeaderComponent],
  templateUrl: './layout-feature-header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutFeatureHeaderComponent {}
