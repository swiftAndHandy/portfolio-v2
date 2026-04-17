import { Component } from '@angular/core';
import {TranslocoDirective} from '@jsverse/transloco';

@Component({
  selector: 'app-contact-form',
  imports: [
    TranslocoDirective
  ],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.css',
})
export class ContactForm {}
