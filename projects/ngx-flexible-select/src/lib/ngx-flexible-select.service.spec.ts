import { TestBed } from '@angular/core/testing';

import { NgxFlexibleSelectService } from './ngx-flexible-select.service';

describe('NgxFlexibleSelectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxFlexibleSelectService = TestBed.get(NgxFlexibleSelectService);
    expect(service).toBeTruthy();
  });
});
