import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BedcaregroomingComponent } from './bedcaregrooming.component';

describe('BedcaregroomingComponent', () => {
  let component: BedcaregroomingComponent;
  let fixture: ComponentFixture<BedcaregroomingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BedcaregroomingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BedcaregroomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
