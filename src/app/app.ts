import {Component, inject, signal} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {TranslocoService} from '@jsverse/transloco';
import {SeoService} from './core/seo-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private translocoService = inject(TranslocoService);
  private seoService = inject(SeoService);
  protected readonly title = signal('portfolio-v2');
  constructor() {
    this.translocoService.langChanges$.subscribe(langChanges => {
      document.documentElement.lang = langChanges;
    })

    this.seoService.init();
  }
}
