import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByteLimitComponent } from './byte-limit.component';

describe('ByteLimitComponent', () => {
  let component: ByteLimitComponent;
  let fixture: ComponentFixture<ByteLimitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByteLimitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ByteLimitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
