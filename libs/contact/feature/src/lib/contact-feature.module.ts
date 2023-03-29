import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactFeatureComponent } from './contact-feature/contact-feature.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ContactFeatureComponent }]),
  ],
})
export class ContactFeatureModule {}
