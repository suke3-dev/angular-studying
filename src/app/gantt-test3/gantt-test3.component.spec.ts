import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GanttTest3Component } from './gantt-test3.component';

describe('GanttTest3Component', () => {
  let component: GanttTest3Component;
  let fixture: ComponentFixture<GanttTest3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GanttTest3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GanttTest3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
