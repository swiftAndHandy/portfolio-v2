import {DOCUMENT, inject, Injectable} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {Meta, Title} from '@angular/platform-browser';
import {TranslocoService} from '@jsverse/transloco';
import {filter, take} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  private doc = inject(DOCUMENT);
  private router = inject(Router);
  private title = inject(Title);
  private meta = inject(Meta);
  private transloco = inject(TranslocoService);

  init() {
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe((event) => {
        const url = `https://veltens.info${event.urlAfterRedirects}`;

        this.setCanonical(url);
        this.setLang();
        this.setTitle();
      });
  }

  private setCanonical(url: string) {
    let link = this.doc.querySelector<HTMLLinkElement>("link[rel='canonical']");

    if (!link) {
      link = this.doc.createElement('link');
      link.rel = 'canonical';
      this.doc.head.appendChild(link);
    }

    link.href = url;
  }

  private setLang() {
    const lang = this.transloco.getActiveLang();
    this.doc.documentElement.lang = lang;
  }

  private setTitle() {
    const key = this.getRouteKey();

    this.transloco.langChanges$.subscribe(() => {
      this.transloco.selectTranslate(`${key}.title`)
        .pipe(take(1))
        .subscribe(title => this.title.setTitle(title));
    });
  }

  private getRouteKey(): string {
    const path = this.router.url;

    if (path.includes('projects')) return 'projects';
    if (path.includes('about')) return 'about';

    return 'home';
  }
}


