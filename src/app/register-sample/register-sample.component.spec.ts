import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RegisterSampleComponent } from './register-sample.component';

describe('RegisterSampleComponent', () => {
  let component: RegisterSampleComponent;
  let fixture: ComponentFixture<RegisterSampleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
