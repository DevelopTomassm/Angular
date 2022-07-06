import { TestBed } from '@angular/core/testing';

import { ServicioCicloService } from './servicio-ciclo.service';

describe('ServicioCicloService', () => {
  let service: ServicioCicloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioCicloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
