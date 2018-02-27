import { TestBed, inject } from '@angular/core/testing';

import { RequireAnonService } from './require-anon.service';

describe('RequireAnonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RequireAnonService]
    });
  });

  it('should be created', inject([RequireAnonService], (service: RequireAnonService) => {
    expect(service).toBeTruthy();
  }));
});
