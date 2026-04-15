import { TestBed } from '@angular/core/testing';

import { ColorSchemeService } from './color-scheme.service';
import {PLATFORM_ID} from '@angular/core';

describe('ColorSchemeService', () => {
  let service: ColorSchemeService;

  beforeEach(() => {
    Object.defineProperty(window, 'matchMedia', {
      value: vi.fn().mockReturnValue({ matches: false }),
      writable: true,
    })
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: vi.fn().mockReturnValue(null),
        setItem: vi.fn()
      },
      writable: true,
    })
    TestBed.configureTestingModule({
      providers: [
        {
          provide: PLATFORM_ID, useValue: 'browser'
        }
      ]
    });
    service = TestBed.inject(ColorSchemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
