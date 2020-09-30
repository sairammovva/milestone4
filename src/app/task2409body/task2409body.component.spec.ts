import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task2409bodyComponent } from './task2409body.component';

describe('Task2409bodyComponent', () => {
  let component: Task2409bodyComponent;
  let fixture: ComponentFixture<Task2409bodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Task2409bodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Task2409bodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
