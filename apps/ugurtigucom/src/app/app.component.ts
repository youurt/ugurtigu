import { Component } from '@angular/core';

@Component({
  selector: 'ugurtigu-root',
  template: `
    <body class="bg-base text-contrast flex flex-col min-h-screen">
      <ugurtigu-layout-feature-header></ugurtigu-layout-feature-header>
      <main class="flex-grow max-w-[80ch] mx-auto px-4">
        <router-outlet></router-outlet>
      </main>
      <ugurtigu-layout-feature-footer></ugurtigu-layout-feature-footer>
    </body>
  `,
})
export class AppComponent {
  title = 'ugurtigucom';
}
