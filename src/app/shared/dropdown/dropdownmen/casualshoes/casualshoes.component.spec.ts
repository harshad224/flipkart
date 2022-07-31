import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasualshoesComponent } from './casualshoes.component';

describe('CasualshoesComponent', () => {
  let component: CasualshoesComponent;
  let fixture: ComponentFixture<CasualshoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasualshoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasualshoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
