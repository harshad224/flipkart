import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownbabyComponent } from './dropdownbaby.component';

describe('DropdownbabyComponent', () => {
  let component: DropdownbabyComponent;
  let fixture: ComponentFixture<DropdownbabyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownbabyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownbabyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
