import { Component } from '@angular/core';
import {TranslocoDirective} from '@jsverse/transloco';

@Component({
  selector: 'app-about',
  imports: [
    TranslocoDirective
  ],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {}
