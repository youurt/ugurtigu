import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonUiHeroComponent } from '@ugurtigu/common/ui';

@Component({
  selector: 'ugurtigu-home-feature',
  standalone: true,
  imports: [CommonModule, CommonUiHeroComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ` <ugurtigu-common-ui-hero title="Hello, my name is Uğur.">
    I am a Software Developer based in Frankfurt am Main. <br />
    Currently I'm working at
    <a class="opacity-80 underline" href="https://www.textbroker.de/"
      >textbroker</a
    >
    helping folks level up with Angular, TypeScript and Nest.js.
  </ugurtigu-common-ui-hero>`,
})
export class HomeFeatureComponent {}
