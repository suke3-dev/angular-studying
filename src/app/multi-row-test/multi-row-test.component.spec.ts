import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiRowTestComponent } from './multi-row-test.component';

describe('MultiRowTestComponent', () => {
  let component: MultiRowTestComponent;
  let fixture: ComponentFixture<MultiRowTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiRowTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiRowTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
