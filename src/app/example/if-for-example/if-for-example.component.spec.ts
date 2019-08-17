import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IfForExampleComponent } from './if-for-example.component';

describe('IfForExampleComponent', () => {
  let component: IfForExampleComponent;
  let fixture: ComponentFixture<IfForExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IfForExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IfForExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
