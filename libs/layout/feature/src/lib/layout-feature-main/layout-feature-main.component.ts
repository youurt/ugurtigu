import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'ugurtigu-layout-feature-main',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `<main class="max-w-[80ch] mx-auto px-4">
    <router-outlet></router-outlet>
  </main>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutFeatureMainComponent {}
