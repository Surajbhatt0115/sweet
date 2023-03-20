import { TestBed } from '@angular/core/testing';

import { Sweetservice } from './sweet.service';

describe('FosaService', () => {
  let service: Sweetservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Sweetservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
