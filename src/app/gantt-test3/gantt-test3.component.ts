import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Gantt from 'frappe-gantt';

@Component({
  selector: 'app-gantt-test3',
  templateUrl: './gantt-test3.component.html',
  styleUrls: ['./gantt-test3.component.scss']
})
export class GanttTest3Component implements OnInit {

  constructor() { }

  @ViewChild('gantt') ganttEl: ElementRef;

  gantt: any;
  tasks = [
    {
      id: 'Task 1',
      name: 'Redesign website',
      start: '2016-12-28',
      end: '2016-12-31',
      progress: 20,
    },
  ];

  ngOnInit(): void {
    this.gantt = new Gantt('#gantt', this.tasks,  {
      on_click: function (task) {
        console.log(task);
      },
      on_date_change: function(task, start, end) {
        console.log(task, start, end);
      },
      on_progress_change: function(task, progress) {
        console.log(task, progress);
      },
      on_view_change: function(mode) {
        console.log(mode);
      }
    });


  }

}
