import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Milestone4Component } from './milestone4.component';

describe('Milestone4Component', () => {
  let component: Milestone4Component;
  let fixture: ComponentFixture<Milestone4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Milestone4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Milestone4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
