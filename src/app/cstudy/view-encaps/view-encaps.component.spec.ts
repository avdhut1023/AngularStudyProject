import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEncapsComponent } from './view-encaps.component';

describe('ViewEncapsComponent', () => {
  let component: ViewEncapsComponent;
  let fixture: ComponentFixture<ViewEncapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewEncapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEncapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
