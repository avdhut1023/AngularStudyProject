import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Animate2Component } from './animate2.component';

describe('Animate2Component', () => {
  let component: Animate2Component;
  let fixture: ComponentFixture<Animate2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Animate2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Animate2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
