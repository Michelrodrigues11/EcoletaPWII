import { TestBed } from '@angular/core/testing';

import { EcopontosService } from './ecopontos.service';

describe('EcopontosService', () => {
  let service: EcopontosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EcopontosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
