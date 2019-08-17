import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateRefVarComponent } from './template-ref-var.component';

describe('TemplateRefVarComponent', () => {
  let component: TemplateRefVarComponent;
  let fixture: ComponentFixture<TemplateRefVarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateRefVarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateRefVarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
