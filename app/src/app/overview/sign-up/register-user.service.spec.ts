import { TestBed } from '@angular/core/testing';

import { NewUserService } from './register-user.service';

describe('NewUserService', () => {
  let service: NewUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
