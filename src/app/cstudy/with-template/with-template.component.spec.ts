import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithTemplateComponent } from './with-template.component';

describe('WithTemplateComponent', () => {
  let component: WithTemplateComponent;
  let fixture: ComponentFixture<WithTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
