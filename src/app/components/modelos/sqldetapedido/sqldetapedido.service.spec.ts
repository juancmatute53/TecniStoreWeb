import { TestBed } from '@angular/core/testing';

import { SqldetapedidoService } from './sqldetapedido.service';

describe('SqldetapedidoService', () => {
  let service: SqldetapedidoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SqldetapedidoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
