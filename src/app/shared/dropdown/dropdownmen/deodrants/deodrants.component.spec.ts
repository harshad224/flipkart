import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeodrantsComponent } from './deodrants.component';

describe('DeodrantsComponent', () => {
  let component: DeodrantsComponent;
  let fixture: ComponentFixture<DeodrantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeodrantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeodrantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
