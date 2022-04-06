import { TestBed } from '@angular/core/testing';

import { XdespacharService } from './xdespachar.service';

describe('XdespacharService', () => {
  let service: XdespacharService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(XdespacharService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
