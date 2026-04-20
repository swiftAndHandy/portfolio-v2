import {DOCUMENT, inject, Injectable} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {Meta, Title} from '@angular/platform-browser';
import {TranslocoService} from '@jsverse/transloco';
import {combineLatestWith, filter, take} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  private doc = inject(DOCUMENT);
  private router = inject(Router);
  private title = inject(Title);
  private meta = inject(Meta);
  private transloco = inject(TranslocoService);

  private get baseURL(): string {
    return `${this.doc.location.protocol}//${this.doc.location.host}`;
  }

  init() {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      combineLatestWith(this.transloco.langChanges$)
    ).subscribe(([event]) => {
      const url = `${this.baseURL}${event.urlAfterRedirects}`;
      this.setCanonical(url)
      this.updateTitle()
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

  private updateTitle() {
    const key = this.getRouteKey();
    this.transloco.selectTranslate(`${key}.title`)
      .pipe(take(1))
      .subscribe(t => this.title.setTitle(t));
  }

  private getRouteKey(): string {
    const path = this.router.url;

    if (path.includes('about')) return 'about';
    if (path.includes('contact')) return 'contactForm';
    if (path.includes('projects')) return 'projects';
    if (path.includes('tech-stack')) return 'techstack';

    return 'home';
  }
}


