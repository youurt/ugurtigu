import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonUiTagHeaderComponent } from '@ugurtigu/common/ui';

@Component({
  selector: 'ugurtigu-layout-feature-footer',
  standalone: true,
  imports: [CommonModule, CommonUiTagHeaderComponent],
  template: `<footer
    class="animate-fade-in py-12 max-w-[80ch] md:mx-auto px-4 mx-4"
  >
    <ugurtigu-common-ui-tag-header>Connect</ugurtigu-common-ui-tag-header>
    <ul class="grid gap-4">
      <li
        *ngFor="
          let item of [
            { name: 'Github', link: 'https://github.com/youurt' },
            { name: 'Linkedin', link: 'https://www.linkedin.com/in/youurt/' },
            {
              name: 'Email',
              link: 'mailto:ugurtigu@gmail.com?subject=Email%20from%20your%20website'
            }
          ]
        "
        class="font-serif text-lg opacity-80 hover:opacity-100 underline"
      >
        <a
          class="font-serif text-lg opacity-80 hover:opacity-100 underline"
          [href]="item.link"
          target="_blank"
          rel="noreferer"
          >{{ item.name }}</a
        >
      </li>
    </ul>
  </footer>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutFeatureFooterComponent {}
