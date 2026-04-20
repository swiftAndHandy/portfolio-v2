import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalNotice } from './legal-notice';
import {getTranslocoModule} from '../../../testing/transloco-testing/transloco-testing.module';

describe('LegalNotice', () => {
  let component: LegalNotice;
  let fixture: ComponentFixture<LegalNotice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        getTranslocoModule(),
        LegalNotice
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LegalNotice);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
