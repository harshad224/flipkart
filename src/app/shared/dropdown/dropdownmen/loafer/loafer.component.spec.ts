import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaferComponent } from './loafer.component';

describe('LoaferComponent', () => {
  let component: LoaferComponent;
  let fixture: ComponentFixture<LoaferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoaferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
