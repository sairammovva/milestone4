import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task2309Component } from './task2309.component';

describe('Task2309Component', () => {
  let component: Task2309Component;
  let fixture: ComponentFixture<Task2309Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Task2309Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Task2309Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
