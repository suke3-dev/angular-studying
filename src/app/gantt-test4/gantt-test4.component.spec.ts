import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GanttTest4Component } from './gantt-test4.component';

describe('GanttTest4Component', () => {
  let component: GanttTest4Component;
  let fixture: ComponentFixture<GanttTest4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GanttTest4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GanttTest4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
