import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WorkFeatureComponent } from './work-feature/work-feature.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: WorkFeatureComponent }]),
  ],
})
export class WorkFeatureModule {}
