import { Component } from '@angular/core';

@Component({
  selector: 'ugurtigu-root',
  template: `
    <body class="bg-base text-contrast flex flex-col min-h-screen">
      <div class="sticky top-0 z-10">
        <ugurtigu-layout-feature-header></ugurtigu-layout-feature-header>
      </div>
      <main class="flex-grow max-w-[80ch] md:mx-auto px-4 mx-4">
        <router-outlet></router-outlet>
      </main>
      <ugurtigu-layout-feature-footer></ugurtigu-layout-feature-footer>
    </body>
  `,
})
export class AppComponent {}
