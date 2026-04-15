import {TestBed} from '@angular/core/testing';

import {SeoService} from './seo-service';
import {getTranslocoModule} from '../../../testing/transloco-testing/transloco-testing.module';

describe('SeoService', () => {
  let service: SeoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [getTranslocoModule()],
    });
    service = TestBed.inject(SeoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
