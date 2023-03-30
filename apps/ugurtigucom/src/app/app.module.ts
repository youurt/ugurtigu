import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {
  LayoutFeatureFooterComponent,
  LayoutFeatureHeaderComponent,
} from '@ugurtigu/layout/feature';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    LayoutFeatureHeaderComponent,
    LayoutFeatureFooterComponent,
    RouterModule.forRoot([
      {
        path: '',
        loadChildren: () =>
          import('@ugurtigu/home/feature').then((mod) => mod.HomeFeatureModule),
        title: 'Uğur Tigu - Software Developer',
      },
      {
        path: 'contact',
        loadChildren: () =>
          import('@ugurtigu/contact/feature').then(
            (mod) => mod.ContactFeatureModule
          ),
        title: 'Contact',
      },
      {
        path: 'work',
        loadChildren: () =>
          import('@ugurtigu/work/feature').then((mod) => mod.WorkFeatureModule),
        title: 'Work',
      },
      {
        path: 'writing',

        loadChildren: () =>
          import('@ugurtigu/writing/feature').then(
            (mod) => mod.WritingFeatureModule
          ),
        title: 'Writing',
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
