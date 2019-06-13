import { TestBed, inject } from '@angular/core/testing';

import { CstudyService } from './cstudy.service';

describe('CstudyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CstudyService]
    });
  });

  it('should be created', inject([CstudyService], (service: CstudyService) => {
    expect(service).toBeTruthy();
  }));
});
