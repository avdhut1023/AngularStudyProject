import { TestBed, async, inject } from '@angular/core/testing';

import { CanLoadGuard } from './can-load.guard';

describe('CanLoadGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanLoadGuard]
    });
  });

  it('should ...', inject([CanLoadGuard], (guard: CanLoadGuard) => {
    expect(guard).toBeTruthy();
  }));
});
