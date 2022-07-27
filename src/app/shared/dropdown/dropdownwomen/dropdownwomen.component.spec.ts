import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownwomenComponent } from './dropdownwomen.component';

describe('DropdownwomenComponent', () => {
  let component: DropdownwomenComponent;
  let fixture: ComponentFixture<DropdownwomenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownwomenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownwomenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
