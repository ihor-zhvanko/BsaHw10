import { TestBed, inject } from '@angular/core/testing';

import { PlaneTypeService } from './plane-type.service';

describe('PlaneTypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlaneTypeService]
    });
  });

  it('should be created', inject([PlaneTypeService], (service: PlaneTypeService) => {
    expect(service).toBeTruthy();
  }));
});
