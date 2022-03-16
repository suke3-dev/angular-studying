import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResizeColumnComponent } from './resize-column.component';

describe('ResizeColumnComponent', () => {
  let component: ResizeColumnComponent;
  let fixture: ComponentFixture<ResizeColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResizeColumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResizeColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
