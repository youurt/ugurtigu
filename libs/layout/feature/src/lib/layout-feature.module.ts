import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: MainLayoutComponent }]),
  ],
})
export class LayoutFeatureModule {}
