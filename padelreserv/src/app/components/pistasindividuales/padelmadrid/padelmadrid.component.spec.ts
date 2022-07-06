import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadelmadridComponent } from './padelmadrid.component';

describe('PadelmadridComponent', () => {
  let component: PadelmadridComponent;
  let fixture: ComponentFixture<PadelmadridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PadelmadridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PadelmadridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
