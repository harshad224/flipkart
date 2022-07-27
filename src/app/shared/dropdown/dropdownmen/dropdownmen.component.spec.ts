import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownmenComponent } from './dropdownmen.component';

describe('DropdownmenComponent', () => {
  let component: DropdownmenComponent;
  let fixture: ComponentFixture<DropdownmenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownmenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownmenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
