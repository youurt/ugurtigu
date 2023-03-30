import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonUiButtonComponent } from '@ugurtigu/common/ui';

@Component({
  selector: 'ugurtigu-writing-main-feature',
  standalone: true,
  imports: [CommonModule, CommonUiButtonComponent],
  template: ` <div class="flex flex-col min-h-screen">
    <div class="grow-0">
      <ugurtigu-common-ui-button
        type="previous"
        routePath="writing"
        text="All Posts"
      ></ugurtigu-common-ui-button>
    </div>
    <div class="grow">
      <ng-content></ng-content>
    </div>
    <div class="grow-0">
      <ugurtigu-common-ui-button
        type="previous"
        routePath="writing"
        text="All Posts"
      ></ugurtigu-common-ui-button>
    </div>
  </div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WritingMainFeatureComponent {}
