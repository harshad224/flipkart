import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdowntvComponent } from './dropdowntv.component';

describe('DropdowntvComponent', () => {
  let component: DropdowntvComponent;
  let fixture: ComponentFixture<DropdowntvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdowntvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdowntvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
