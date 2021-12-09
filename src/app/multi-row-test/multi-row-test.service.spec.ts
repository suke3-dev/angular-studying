import { TestBed } from '@angular/core/testing';

import { MultiRowTestService } from './multi-row-test.service';

describe('MultiRowTestService', () => {
  let service: MultiRowTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MultiRowTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
