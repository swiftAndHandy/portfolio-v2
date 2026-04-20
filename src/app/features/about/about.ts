import {Component, inject} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import { TranslocoDirective } from '@jsverse/transloco';
import {LangService} from '../../core/i18n/lang.service';

@Component({
  selector: 'app-about',
  imports: [
    TranslocoDirective,
    RouterLink,
  ],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  langService = inject(LangService);

  toPath(path: string) {
    return this.langService.routerLinkToPath(path);
  }
}
