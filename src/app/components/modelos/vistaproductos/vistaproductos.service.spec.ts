import { TestBed } from '@angular/core/testing';

import { VistaproductosService } from './vistaproductos.service';

describe('VistaproductosService', () => {
  let service: VistaproductosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VistaproductosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
