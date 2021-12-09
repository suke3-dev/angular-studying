import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MultiRowTestComponent } from './multi-row-test/multi-row-test.component';
import { GanttTestComponent } from './gantt-test/gantt-test.component';


const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'multi-row-test', component: MultiRowTestComponent },
  { path: 'gantt-test', component: GanttTestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
