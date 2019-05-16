import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeStudyComponent } from './pipe-study.component';

describe('PipeStudyComponent', () => {
  let component: PipeStudyComponent;
  let fixture: ComponentFixture<PipeStudyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipeStudyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
