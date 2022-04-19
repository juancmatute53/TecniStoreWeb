import { TestBed } from '@angular/core/testing';

import { ClienterolService } from './clienterol.service';

describe('ClienterolService', () => {
  let service: ClienterolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClienterolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
