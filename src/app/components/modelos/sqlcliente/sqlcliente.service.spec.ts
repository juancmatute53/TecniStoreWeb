import { TestBed } from '@angular/core/testing';

import { SqlclienteService } from './sqlcliente.service';

describe('SqlclienteService', () => {
  let service: SqlclienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SqlclienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
