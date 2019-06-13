import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxJsstudyComponent } from './rx-jsstudy.component';

describe('RxJsstudyComponent', () => {
  let component: RxJsstudyComponent;
  let fixture: ComponentFixture<RxJsstudyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxJsstudyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxJsstudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
