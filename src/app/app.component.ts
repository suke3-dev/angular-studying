import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private router: Router,
  ) {}

  title = 'angular-studying';

  onClickMultiRowTest(): void {
    this.router.navigate(['multi-row-test']);
  }

  onClickGanttTest(): void {
    this.router.navigate(['gantt-test']);
  }

  onClickGanttTest2(): void {
    this.router.navigate(['gantt-test2']);
  }

  onClickGanttTest3(): void {
    this.router.navigate(['gantt-test3']);
  }

  onClickGanttTest4(): void {
    this.router.navigate(['gantt-test4']);
  }

  onClickReportTest(): void {
    this.router.navigate(['report-test']);
  }

  onClickResizeColumn(): void {
    this.router.navigate(['resize-column-test']);
  }

  onClickColumnRight(): void {
    this.router.navigate(['column-right-test']);
  }

  onClickTablePaging(): void {
    this.router.navigate(['table-paging']);
  }

  onClickGridLayout(): void {
    this.router.navigate(['grid-layout']);
  }

  
  onClickByteLimit(): void {
    this.router.navigate(['byte-limit']);
  }

  onClickFileRename(): void {
    this.router.navigate(['file-rename']);
  }
}
