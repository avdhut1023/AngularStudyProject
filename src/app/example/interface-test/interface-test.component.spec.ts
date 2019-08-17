import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceTestComponent } from './interface-test.component';

describe('InterfaceTestComponent', () => {
  let component: InterfaceTestComponent;
  let fixture: ComponentFixture<InterfaceTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterfaceTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfaceTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
