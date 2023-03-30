import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ugurtigu-common-ui-hero',
  standalone: true,
  imports: [CommonModule],
  template: ` <section class="py-24 animate-intro relative">
    <h1 class="text-4xl mb-4 font-bold">{{ title }}</h1>
    <h2 class="font-serif italic text-2xl">
      <ng-content></ng-content>
    </h2>
  </section>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommonUiHeroComponent {
  /**
   * The title of the hero section
   */
  @Input() title?: string;
}
