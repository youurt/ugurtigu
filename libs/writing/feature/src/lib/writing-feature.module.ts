import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WritingFeatureComponent } from './writing-feature/writing-feature.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: WritingFeatureComponent }]),
  ],
})
export class WritingFeatureModule {}
