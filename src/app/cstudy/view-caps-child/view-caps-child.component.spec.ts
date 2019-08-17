import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCapsChildComponent } from './view-caps-child.component';

describe('ViewCapsChildComponent', () => {
  let component: ViewCapsChildComponent;
  let fixture: ComponentFixture<ViewCapsChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCapsChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCapsChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
