import { TestBed } from '@angular/core/testing';

import { ServicioCeldasService } from './servicio-celdas.service';

describe('ServicioCeldasService', () => {
  let service: ServicioCeldasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioCeldasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
