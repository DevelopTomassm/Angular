import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DudaspreguntasComponent } from './dudaspreguntas.component';

describe('DudaspreguntasComponent', () => {
  let component: DudaspreguntasComponent;
  let fixture: ComponentFixture<DudaspreguntasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DudaspreguntasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DudaspreguntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
