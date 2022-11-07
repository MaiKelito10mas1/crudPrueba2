import { TestBed } from '@angular/core/testing';

import { SProductoService } from './sproducto.service';

describe('SProductoService', () => {
  let service: SProductoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SProductoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
