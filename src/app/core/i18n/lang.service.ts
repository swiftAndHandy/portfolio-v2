import {inject, Injectable} from '@angular/core';
import {TranslocoService} from '@jsverse/transloco';
import {toSignal} from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class LangService {
  private transloco = inject(TranslocoService)

  currentLang = toSignal(this.transloco.langChanges$, {
    initialValue: this.transloco.getActiveLang()
  })

  routerLinkToPath(path: string) {
    return ['/', this.currentLang(), ...path.split('/')];
  }
}
