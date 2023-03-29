import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ugurtigu-layout-feature-main',
  standalone: true,
  imports: [CommonModule],
  template: `<main class="max-w-[80ch] mx-auto px-4">main</main>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutFeatureMainComponent {}
