import { Component } from '@angular/core';
import {TranslocoDirective} from '@jsverse/transloco';

@Component({
  selector: 'app-privacy-policy',
  imports: [
    TranslocoDirective
  ],
  templateUrl: './privacy-policy.html',
  styleUrl: './privacy-policy.css',
})
export class PrivacyPolicy {}
