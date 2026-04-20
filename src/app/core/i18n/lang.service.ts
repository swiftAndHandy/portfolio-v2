import {inject, Injectable} from '@angular/core';
import {TranslocoService} from '@jsverse/transloco';
import {toSignal} from '@angular/core/rxjs-interop';
import {Language} from './languages';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LangService {
  private transloco = inject(TranslocoService)

  currentLang = toSignal(this.transloco.langChanges$ as Observable<Language>, {
    initialValue: this.transloco.getActiveLang() as Language,
  })

  routerLinkToPath(path: string) {
    return path ? ['/', this.currentLang(), ...path.split('/')] : ['/', this.currentLang()];
  }
}
