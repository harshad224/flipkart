import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipflopsComponent } from './flipflops.component';

describe('FlipflopsComponent', () => {
  let component: FlipflopsComponent;
  let fixture: ComponentFixture<FlipflopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlipflopsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlipflopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
