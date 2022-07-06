import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltradosComponent } from './filtrados.component';

describe('FiltradosComponent', () => {
  let component: FiltradosComponent;
  let fixture: ComponentFixture<FiltradosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltradosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
