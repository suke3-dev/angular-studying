import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GanttTest2Component } from './gantt-test2.component';

describe('GanttTest2Component', () => {
  let component: GanttTest2Component;
  let fixture: ComponentFixture<GanttTest2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GanttTest2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GanttTest2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
