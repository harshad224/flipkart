import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownhomeComponent } from './dropdownhome.component';

describe('DropdownhomeComponent', () => {
  let component: DropdownhomeComponent;
  let fixture: ComponentFixture<DropdownhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownhomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
