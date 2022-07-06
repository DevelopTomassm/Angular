import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadelindoorComponent } from './padelindoor.component';

describe('PadelindoorComponent', () => {
  let component: PadelindoorComponent;
  let fixture: ComponentFixture<PadelindoorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PadelindoorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PadelindoorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
