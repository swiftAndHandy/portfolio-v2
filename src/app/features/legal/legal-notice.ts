import { Component } from '@angular/core';
import {TranslocoDirective} from '@jsverse/transloco';

@Component({
  selector: 'app-legal-notice',
  imports: [
    TranslocoDirective
  ],
  templateUrl: './legal-notice.html',
  styleUrl: './legal-notice.css',
})
export class LegalNotice {}
