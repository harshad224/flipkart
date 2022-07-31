import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensgroomingComponent } from './mensgrooming.component';

describe('MensgroomingComponent', () => {
  let component: MensgroomingComponent;
  let fixture: ComponentFixture<MensgroomingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensgroomingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MensgroomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
