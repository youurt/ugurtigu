import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export type CommonUiCardColor =
  | 'bg-base'
  | 'bg-blue'
  | 'bg-red'
  | 'bg-purple'
  | 'bg-contrast';

@Component({
  selector: 'ugurtigu-common-ui-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article
      class="w-full p-8 rounded-2xl md:min-w-[328px] min-w-[260px] min-h-[400px] grid grid-rows-[auto_1fr] {{
        color
      }}"
    >
      <div
        class="{{
          color === 'bg-contrast' ? 'text-base' : 'text-contrast'
        }} text-center flex flex-col gap-8"
      >
        <header class="font-serif">
          <h4 class="text-xl">{{ title }}</h4>
          <p class="text-xs font-serif text-center mt-2 opacity-70">
            {{ subTitle }}
          </p>
        </header>
        <div class="p-8">
          <ng-content></ng-content>
        </div>
      </div>
    </article>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommonUiCardComponent {
  /**
   * The color of the card.
   */
  @Input() color: CommonUiCardColor = 'bg-base';

  /**
   * The title of the card.
   */
  @Input() title?: string;

  /**
   * The subtitle of the card.
   */
  @Input() subTitle?: string;
}
