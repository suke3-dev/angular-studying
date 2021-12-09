import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GanttTestComponent } from './gantt-test.component';

describe('GanttTestComponent', () => {
  let component: GanttTestComponent;
  let fixture: ComponentFixture<GanttTestComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GanttTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GanttTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
