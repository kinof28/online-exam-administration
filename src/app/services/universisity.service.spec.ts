import { TestBed } from '@angular/core/testing';

import { UniversisityService } from './universisity.service';

describe('UniversisityService', () => {
  let service: UniversisityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UniversisityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
