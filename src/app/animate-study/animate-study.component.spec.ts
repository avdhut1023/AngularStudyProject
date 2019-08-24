import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimateStudyComponent } from './animate-study.component';

describe('AnimateStudyComponent', () => {
  let component: AnimateStudyComponent;
  let fixture: ComponentFixture<AnimateStudyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimateStudyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimateStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
