import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ugurtigu-contact-feature',
  standalone: true,
  imports: [CommonModule],
  template: ` <p>contact-feature works!</p> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactFeatureComponent {}
