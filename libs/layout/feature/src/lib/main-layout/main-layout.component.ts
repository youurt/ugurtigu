import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LayoutFeatureFooterComponent } from '../layour-feature-footer/layout-feature-footer.component';
import { LayoutFeatureHeaderComponent } from '../layout-feature-header/layout-feature-header.component';
import { LayoutFeatureMainComponent } from '../layout-feature-main/layout-feature-main.component';

@Component({
  selector: 'ugurtigu-main-layout',
  standalone: true,
  imports: [
    CommonModule,
    LayoutFeatureMainComponent,
    LayoutFeatureHeaderComponent,
    LayoutFeatureFooterComponent,
  ],
  templateUrl: './main-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLayoutComponent {}
