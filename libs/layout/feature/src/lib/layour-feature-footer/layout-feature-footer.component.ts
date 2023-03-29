import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ugurtigu-layout-feature-footer',
  standalone: true,
  imports: [CommonModule],
  template: `<footer class="mx-auto max-w-[80ch] py-12 fade-in px-4">
    footer
  </footer>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutFeatureFooterComponent {}
