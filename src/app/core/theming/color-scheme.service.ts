import {DOCUMENT, effect, inject, Injectable, PLATFORM_ID, signal} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ColorSchemeService {
  private doc = inject(DOCUMENT);
  private platformId= inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);

  private readonly STORAGE_KEY = 'color-scheme';

  darkModeIsActive = signal(this.getInitialScheme())

  constructor() {
    effect(() => {
      this.applyScheme(this.darkModeIsActive());
    });
  }

  toggle() {
    this.darkModeIsActive.update(v => !v);
  }

  private getInitialScheme(): boolean {
    if (!this.isBrowser) return false;
    const stored = this.doc.defaultView?.localStorage?.getItem(this.STORAGE_KEY);
    if (stored !== null) return stored === 'dark';
    return this.doc.defaultView?.matchMedia('(prefers-color-scheme: dark)')?.matches ?? false;
  }

  private applyScheme(dark: boolean) {
    if (!this.isBrowser) return;
    this.doc.documentElement.classList.toggle('dark', dark);
    this.doc.defaultView?.localStorage?.setItem(this.STORAGE_KEY, dark ? 'dark' : 'light');
  }
}
