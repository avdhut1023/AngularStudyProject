import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicAnimateComponent } from './basic-animate.component';

describe('BasicAnimateComponent', () => {
  let component: BasicAnimateComponent;
  let fixture: ComponentFixture<BasicAnimateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicAnimateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicAnimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
