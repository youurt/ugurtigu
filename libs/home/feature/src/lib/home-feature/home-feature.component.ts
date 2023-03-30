import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonDataAccessService } from '@ugurtigu/common/data-access';
import {
  CommonUiCardComponent,
  CommonUiHeroComponent,
  CommonUiListComponent,
  CommonUiWorkComponent,
} from '@ugurtigu/common/ui';
import { map } from 'rxjs';

@Component({
  selector: 'ugurtigu-home-feature',
  standalone: true,
  imports: [
    CommonModule,
    CommonUiHeroComponent,
    CommonUiListComponent,
    CommonUiWorkComponent,
    CommonUiCardComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ugurtigu-common-ui-hero title="Hello, my name is Uğur Tigu.">
      I am a Software Developer based in Frankfurt am Main. <br />
      Currently I'm working at
      <a class="opacity-80 underline" href="https://www.textbroker.de/"
        >textbroker</a
      >
      helping folks level up with Angular, TypeScript and Nest.js.
    </ugurtigu-common-ui-hero>
    <ugurtigu-common-ui-list
      title="Recent Thoughts"
      [listItems]="(writings$ | async)!"
      [button]="(writingButton$ | async)!"
    ></ugurtigu-common-ui-list>

    <ugurtigu-common-ui-work
      title="Recent Work"
      [button]="(workButton$ | async)!"
    >
      <!-- @TODO: get this cards from cards-feature and use https://angular.io/api/common/SlicePipe to only show the newsest 2 cards   -->
      <ugurtigu-common-ui-card
        color="bg-contrast"
        title="Card 1"
        subTitle="Card 1 Subtitle"
      >
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, sequi
          reiciendis. Expedita rem in quae labore ipsum error nisi natus libero
          quis soluta modi ad nemo maxime, optio maiores excepturi laboriosam
          facere fugit incidunt aspernatur odit? Ex ad ratione, illo voluptas
          minus neque autem quas esse accusamus dolore odit necessitatibus!
        </div>
      </ugurtigu-common-ui-card>

      <ugurtigu-common-ui-card
        color="bg-blue"
        title="Card 2"
        subTitle="Card 2 Subtitle"
      >
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, sequi
          reiciendis. Expedita rem in quae labore ipsum error nisi natus libero
          quis soluta modi ad nemo maxime, optio maiores excepturi laboriosam
          facere fugit incidunt aspernatur odit? Ex ad ratione, illo voluptas
          minus neque autem quas esse accusamus dolore odit necessitatibus!
        </div>
      </ugurtigu-common-ui-card>
    </ugurtigu-common-ui-work>
  `,
})
export class HomeFeatureComponent {
  /**
   * Observable of writings.
   */
  writings$ = this.commonDataAccessService.writings$.pipe(
    map((writings) => writings.slice(0, 2))
  );

  /**
   * Observable for the writing button.
   */
  writingButton$ = this.commonDataAccessService.writingButton$;

  /**
   * Observable for the writing button.
   */
  workButton$ = this.commonDataAccessService.workButton$;

  constructor(private commonDataAccessService: CommonDataAccessService) {}
}
