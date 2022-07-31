import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenperfumeComponent } from './menperfume.component';

describe('MenperfumeComponent', () => {
  let component: MenperfumeComponent;
  let fixture: ComponentFixture<MenperfumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenperfumeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenperfumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
