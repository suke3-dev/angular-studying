import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MultiRowTestComponent } from './multi-row-test/multi-row-test.component';
import { GanttTestComponent } from './gantt-test/gantt-test.component';
import { ReportTestComponent } from './report-test/report-test.component';
import { ResizeColumnComponent } from './resize-column/resize-column.component';
import { ColumnRightComponent } from './column-right/column-right.component';
import { TablePagingComponent } from './table-paging/table-paging.component';
import { GridLayoutComponent } from './grid-layout/grid-layout.component';
import { ByteLimitComponent } from './byte-limit/byte-limit.component';
import { FileRenameComponent } from './file-rename/file-rename.component';
import { GanttTest2Component } from './gantt-test2/gantt-test2.component';
import { GanttTest3Component } from './gantt-test3/gantt-test3.component';
import { GanttTest4Component } from './gantt-test4/gantt-test4.component';


const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'multi-row-test', component: MultiRowTestComponent },
  { path: 'gantt-test', component: GanttTestComponent },
  { path: 'gantt-test2', component: GanttTest2Component },
  { path: 'gantt-test3', component: GanttTest3Component },
  { path: 'gantt-test4', component: GanttTest4Component },
  { path: 'report-test', component: ReportTestComponent },
  { path: 'resize-column-test', component: ResizeColumnComponent },
  { path: 'column-right-test', component: ColumnRightComponent },
  { path: 'table-paging', component: TablePagingComponent },
  { path: 'grid-layout', component: GridLayoutComponent },
  { path: 'byte-limit', component: ByteLimitComponent },
  { path: 'file-rename', component: FileRenameComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
