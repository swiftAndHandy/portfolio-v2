import {Component, DOCUMENT, effect, inject, signal} from '@angular/core';
import {NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {TranslocoDirective, TranslocoService} from '@jsverse/transloco';
import {SeoService} from './core/seo/seo-service';
import {Header} from './layout/header/header';
import {Footer} from './layout/footer/footer';
import {toSignal} from '@angular/core/rxjs-interop';
import {filter} from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TranslocoDirective, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private doc = inject(DOCUMENT);
  private router = inject(Router);
  private seoService = inject(SeoService);
  private translocoService = inject(TranslocoService);

  private lang = toSignal(this.translocoService.langChanges$);

  constructor() {
    effect(() => {
      const lang = this.lang();
      if (lang) this.doc.documentElement.lang = lang;
    })

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
    ).subscribe(() => {
      this.doc.getElementById('main-content')?.focus();
    });

    this.seoService.init();
  }
}
