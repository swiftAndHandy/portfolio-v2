import {Component, inject, signal} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {TranslocoDirective, TranslocoService} from '@jsverse/transloco';
import {SeoService} from './core/seo/seo-service';
import {Header} from './layout/header/header';
import {Footer} from './layout/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TranslocoDirective, Header, Footer],
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
