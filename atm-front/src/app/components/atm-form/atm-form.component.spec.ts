import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AtmFormComponent} from './atm-form.component';

describe('AtmFormComponent', () => {
  let component: AtmFormComponent;
  let fixture: ComponentFixture<AtmFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AtmFormComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtmFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
