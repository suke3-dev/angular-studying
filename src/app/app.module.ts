import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MultiRowTestComponent } from './multi-row-test/multi-row-test.component';
import { MaterialModule } from './material-module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { GanttTestComponent } from './gantt-test/gantt-test.component';
import { RegisterSampleComponent } from './register-sample/register-sample.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReportTestComponent } from './report-test/report-test.component';
import { ResizeColumnComponent } from './resize-column/resize-column.component';
import { ResizeColumnDirective } from './resize-column/resize-column.directive';
import { ColumnRightComponent } from './column-right/column-right.component';
import { TablePagingComponent } from './table-paging/table-paging.component';
import { GridLayoutComponent } from './grid-layout/grid-layout.component';
import { ByteLimitComponent } from './byte-limit/byte-limit.component';
import { FileRenameComponent } from './file-rename/file-rename.component';
import { GanttTest2Component } from './gantt-test2/gantt-test2.component';
import { GanttTest3Component } from './gantt-test3/gantt-test3.component';
import { GanttTest4Component } from './gantt-test4/gantt-test4.component';
import { AngularGanttScheduleTimelineCalendarModule } from 'angular-gantt-schedule-timeline-calendar';

@NgModule({
  declarations: [
    AppComponent,
    MultiRowTestComponent,
    GanttTestComponent,
    RegisterSampleComponent,
    ReportTestComponent,
    ResizeColumnComponent,
    ResizeColumnDirective,
    ColumnRightComponent,
    TablePagingComponent,
    GridLayoutComponent,
    ByteLimitComponent,
    FileRenameComponent,
    GanttTest2Component,
    GanttTest3Component,
    GanttTest4Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AngularGanttScheduleTimelineCalendarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
