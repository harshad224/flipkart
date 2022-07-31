import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormalshoesComponent } from './formalshoes.component';

describe('FormalshoesComponent', () => {
  let component: FormalshoesComponent;
  let fixture: ComponentFixture<FormalshoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormalshoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormalshoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
