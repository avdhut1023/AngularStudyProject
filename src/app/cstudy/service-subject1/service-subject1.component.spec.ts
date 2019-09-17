import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceSubject1Component } from './service-subject1.component';

describe('ServiceSubject1Component', () => {
  let component: ServiceSubject1Component;
  let fixture: ComponentFixture<ServiceSubject1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceSubject1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceSubject1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
