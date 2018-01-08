import { TestBed, inject } from '@angular/core/testing';

import { S8a1ServiceService } from './s8a1-service.service';

describe('S8a1ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [S8a1ServiceService]
    });
  });

  it('should be created', inject([S8a1ServiceService], (service: S8a1ServiceService) => {
    expect(service).toBeTruthy();
  }));
});
