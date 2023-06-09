import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WritingFeatureTheFiveWhysComponent } from './writing-feature-the-five-whys/writing-feature-the-five-whys.component';
import { WritingFeatureTheThreeWhysComponent } from './writing-feature-the-three-whys/writing-feature-the-three-whys.component';
import { WritingFeatureTheTwoWhysComponent } from './writing-feature-the-two-whys/writing-feature-the-two-whys.component';
import { WritingFeatureComponent } from './writing-feature/writing-feature.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: WritingFeatureComponent },
      {
        path: 'the-5-whys',
        component: WritingFeatureTheFiveWhysComponent,
        title: 'The 5 Whys',
      },
      {
        path: 'the-3-whys',
        component: WritingFeatureTheThreeWhysComponent,
        title: 'The 3 Whys',
      },
      {
        path: 'the-2-whys',
        component: WritingFeatureTheTwoWhysComponent,
        title: 'The 2 Whys',
      },
    ]),
  ],
})
export class WritingFeatureModule {}
