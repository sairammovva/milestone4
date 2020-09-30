import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task2409headComponent } from './task2409head.component';

describe('Task2409headComponent', () => {
  let component: Task2409headComponent;
  let fixture: ComponentFixture<Task2409headComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Task2409headComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Task2409headComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
