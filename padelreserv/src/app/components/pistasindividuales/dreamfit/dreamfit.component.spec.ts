import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DreamfitComponent } from './dreamfit.component';

describe('DreamfitComponent', () => {
  let component: DreamfitComponent;
  let fixture: ComponentFixture<DreamfitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DreamfitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DreamfitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
