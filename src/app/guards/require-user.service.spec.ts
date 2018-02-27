import { TestBed, inject } from '@angular/core/testing';

import { RequireUserService } from './require-user.service';

describe('RequireUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RequireUserService]
    });
  });

  it('should be created', inject([RequireUserService], (service: RequireUserService) => {
    expect(service).toBeTruthy();
  }));
});
