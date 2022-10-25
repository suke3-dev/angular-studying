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


const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'multi-row-test', component: MultiRowTestComponent },
  { path: 'gantt-test', component: GanttTestComponent },
  { path: 'report-test', component: ReportTestComponent },
  { path: 'resize-column-test', component: ResizeColumnComponent },
  { path: 'column-right-test', component: ColumnRightComponent },
  { path: 'table-paging', component: TablePagingComponent },
  { path: 'grid-layout', component: GridLayoutComponent },
  { path: 'byte-limit', component: ByteLimitComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
