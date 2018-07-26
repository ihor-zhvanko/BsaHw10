import { TestBed, inject } from '@angular/core/testing';

import { AirhostessService } from './airhostess.service';

describe('AirhostessService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AirhostessService]
    });
  });

  it('should be created', inject([AirhostessService], (service: AirhostessService) => {
    expect(service).toBeTruthy();
  }));
});
