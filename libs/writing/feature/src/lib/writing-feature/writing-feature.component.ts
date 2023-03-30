import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonDataAccessService } from '@ugurtigu/common/data-access';
import {
  CommonUiHeroComponent,
  CommonUiListComponent,
} from '@ugurtigu/common/ui';

@Component({
  selector: 'ugurtigu-writing-feature',
  standalone: true,
  imports: [CommonModule, CommonUiHeroComponent, CommonUiListComponent],
  template: `
    <ugurtigu-common-ui-hero title="Writing">
      Essays, learning, and other miscellaneous goodies. Lorem ipsum dolor sit
      amet consectetur adipisicing elit. Error, est culpa quisquam, molestiae
      perspiciatis maiores consectetur amet sapiente inventore hic eius fuga
      omnis dolorem quidem repellendus tempora aspernatur perferendis sed dicta
      voluptate placeat. Voluptate minima illum voluptatum sint, beatae dicta!
    </ugurtigu-common-ui-hero>

    <ugurtigu-common-ui-list
      [showTitle]="false"
      [showNextButton]="false"
      [listItems]="(writings$ | async)!"
    ></ugurtigu-common-ui-list>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WritingFeatureComponent {
  constructor(private commonDataAccessService: CommonDataAccessService) {}

  /**
   * The writings to be displayed.
   */
  writings$ = this.commonDataAccessService.writings$;
}
