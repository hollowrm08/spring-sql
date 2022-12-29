import { TestBed } from '@angular/core/testing';

import { VerifyUserFieldsService } from './verify-user-fields.service';

describe('VerifyUserFieldsService', () => {
  let service: VerifyUserFieldsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerifyUserFieldsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
