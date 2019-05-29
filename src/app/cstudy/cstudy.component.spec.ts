import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CstudyComponent } from './cstudy.component';

describe('CstudyComponent', () => {
  let component: CstudyComponent;
  let fixture: ComponentFixture<CstudyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CstudyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CstudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
