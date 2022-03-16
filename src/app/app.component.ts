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

  onClick(): void {
    this.router.navigate(['multi-row-test']);
  }

  onClick2(): void {
    this.router.navigate(['gantt-test']);
  }

  onClick3(): void {
    this.router.navigate(['report-test']);
  }

  onClick4(): void {
    this.router.navigate(['resize-column-test']);
  }

  onClick5(): void {
    this.router.navigate(['column-right-test']);
  }
}
