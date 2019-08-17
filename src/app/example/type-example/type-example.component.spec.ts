import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeExampleComponent } from './type-example.component';

describe('TypeExampleComponent', () => {
  let component: TypeExampleComponent;
  let fixture: ComponentFixture<TypeExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
