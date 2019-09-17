import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceSubject2Component } from './service-subject2.component';

describe('ServiceSubject2Component', () => {
  let component: ServiceSubject2Component;
  let fixture: ComponentFixture<ServiceSubject2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceSubject2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceSubject2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
