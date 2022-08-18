import { TestBed } from '@angular/core/testing';

import { GetDSService } from './get-ds.service';

describe('GetDSService', () => {
  let service: GetDSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetDSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
