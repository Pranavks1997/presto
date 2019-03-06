import { TestBed } from '@angular/core/testing';

import { SplitServiceService } from './split-service.service';

describe('SplitServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SplitServiceService = TestBed.get(SplitServiceService);
    expect(service).toBeTruthy();
  });
});
