import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EuroindoorComponent } from './euroindoor.component';

describe('EuroindoorComponent', () => {
  let component: EuroindoorComponent;
  let fixture: ComponentFixture<EuroindoorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EuroindoorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EuroindoorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
