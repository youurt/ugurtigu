import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonUiLogoComponent } from '../common-ui-logo/common-ui-logo.component';

@Component({
  selector: 'ugurtigu-common-ui-header',
  standalone: true,
  imports: [CommonModule, CommonUiLogoComponent],
  template: `<header class="py-6 sticky top-0 z-10 bg-ugurtigu-base">
    <nav class="max-w-[1280px] mx-auto flex justify-between px-4">
      <ugurtigu-common-ui-logo></ugurtigu-common-ui-logo> Header
    </nav>
  </header> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommonUiHeaderComponent {}
