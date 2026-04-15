import { ComponentFixture, TestBed } from '@angular/core/testing';
import { getTranslocoModule } from '../../../../../testing/transloco-testing/transloco-testing.module';

import { Atf } from './atf';

describe('Atf', () => {
  let component: Atf;
  let fixture: ComponentFixture<Atf>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        getTranslocoModule(),
        Atf
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Atf);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
