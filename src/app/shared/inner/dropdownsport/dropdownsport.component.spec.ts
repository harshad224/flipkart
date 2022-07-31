import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownsportComponent } from './dropdownsport.component';

describe('DropdownsportComponent', () => {
  let component: DropdownsportComponent;
  let fixture: ComponentFixture<DropdownsportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownsportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownsportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
