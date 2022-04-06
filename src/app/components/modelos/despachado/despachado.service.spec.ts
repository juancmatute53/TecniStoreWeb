import { TestBed } from '@angular/core/testing';

import { DespachadoService } from './despachado.service';

describe('DespachadoService', () => {
  let service: DespachadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DespachadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
