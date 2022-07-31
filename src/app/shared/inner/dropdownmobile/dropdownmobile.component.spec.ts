import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownmobileComponent } from './dropdownmobile.component';

describe('DropdownmobileComponent', () => {
  let component: DropdownmobileComponent;
  let fixture: ComponentFixture<DropdownmobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownmobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownmobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
