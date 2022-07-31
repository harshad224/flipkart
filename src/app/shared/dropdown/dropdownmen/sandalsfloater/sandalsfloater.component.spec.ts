import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SandalsfloaterComponent } from './sandalsfloater.component';

describe('SandalsfloaterComponent', () => {
  let component: SandalsfloaterComponent;
  let fixture: ComponentFixture<SandalsfloaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SandalsfloaterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SandalsfloaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
