import { TestBed } from '@angular/core/testing';

import { LangService } from './lang.service';
import {getTranslocoModule} from '../../../testing/transloco-testing/transloco-testing.module';

describe('LangService', () => {
  let service: LangService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [getTranslocoModule()]
    });
    service = TestBed.inject(LangService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
