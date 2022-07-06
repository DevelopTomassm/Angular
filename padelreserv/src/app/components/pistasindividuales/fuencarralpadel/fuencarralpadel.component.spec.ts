import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuencarralpadelComponent } from './fuencarralpadel.component';

describe('FuencarralpadelComponent', () => {
  let component: FuencarralpadelComponent;
  let fixture: ComponentFixture<FuencarralpadelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuencarralpadelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuencarralpadelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
