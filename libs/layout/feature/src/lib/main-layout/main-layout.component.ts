import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { LayoutFeatureHeaderComponent } from '../layout-feature-header/layout-feature-header.component';

import { MainComponent } from '../main/main.component';

@Component({
  selector: 'ugurtigu-main-layout',
  standalone: true,
  imports: [
    CommonModule,
    MainComponent,
    LayoutFeatureHeaderComponent,
    FooterComponent,
  ],
  templateUrl: './main-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLayoutComponent {}
