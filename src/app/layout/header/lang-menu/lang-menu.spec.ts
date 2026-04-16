import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LangMenu } from './lang-menu';
import {getTranslocoModule} from '../../../../testing/transloco-testing/transloco-testing.module';

describe('LangMenu', () => {
  let component: LangMenu;
  let fixture: ComponentFixture<LangMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        getTranslocoModule(),
        LangMenu
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LangMenu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
