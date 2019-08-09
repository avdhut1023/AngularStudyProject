import { TestBed, inject } from '@angular/core/testing';

import { MyCompSerService } from './my-comp-ser.service';

describe('MyCompSerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyCompSerService]
    });
  });

  it('should be created', inject([MyCompSerService], (service: MyCompSerService) => {
    expect(service).toBeTruthy();
  }));
});
