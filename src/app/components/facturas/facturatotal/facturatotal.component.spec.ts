import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturatotalComponent } from './facturatotal.component';

describe('FacturatotalComponent', () => {
  let component: FacturatotalComponent;
  let fixture: ComponentFixture<FacturatotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacturatotalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturatotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
