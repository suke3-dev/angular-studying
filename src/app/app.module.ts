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

@NgModule({
  declarations: [
    AppComponent,
    MultiRowTestComponent,
    GanttTestComponent,
    RegisterSampleComponent,
    ReportTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
