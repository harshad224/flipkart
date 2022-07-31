import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShavingaftershaveComponent } from './shavingaftershave.component';

describe('ShavingaftershaveComponent', () => {
  let component: ShavingaftershaveComponent;
  let fixture: ComponentFixture<ShavingaftershaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShavingaftershaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShavingaftershaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
