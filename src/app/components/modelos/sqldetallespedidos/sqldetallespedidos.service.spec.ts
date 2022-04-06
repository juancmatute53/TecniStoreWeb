import { TestBed } from '@angular/core/testing';

import { SqldetallespedidosService } from './sqldetallespedidos.service';

describe('SqldetallespedidosService', () => {
  let service: SqldetallespedidosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SqldetallespedidosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
