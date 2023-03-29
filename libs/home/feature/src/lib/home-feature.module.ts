import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeFeatureComponent } from './home-feature/home-feature.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: HomeFeatureComponent }]),
  ],
})
export class HomeFeatureModule {}
