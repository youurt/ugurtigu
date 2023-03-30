import { Injectable } from '@angular/core';
import { CommonUiListButton, CommonUiListItem } from '@ugurtigu/common/ui';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonDataAccessService {
  /**
   * Observable of writings.
   */
  writings$: Observable<CommonUiListItem[]> = of([
    {
      date: 'May 2023',
      title: 'The 5 Whys',
      routePath: '/writing/the-5-whys',
    },
    {
      date: 'May 2020',
      title: 'The 3 Whys',
      routePath: '/writing/the-3-whys',
    },
    {
      date: 'May 2022',
      title: 'The 2 Whys',
      routePath: '/writing/the-2-whys',
    },
  ]);

  /**
   * The button for the writings.
   */
  writingButton$: Observable<CommonUiListButton> = of({
    routePath: '/writing',
    text: 'More',
  });

  /**
   * The button for the work.
   */
  workButton$: Observable<CommonUiListButton> = of({
    routePath: '/work',
    text: 'More',
  });
}
