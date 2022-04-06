import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaxdespacharComponent } from './facturaxdespachar.component';

describe('FacturaxdespacharComponent', () => {
  let component: FacturaxdespacharComponent;
  let fixture: ComponentFixture<FacturaxdespacharComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacturaxdespacharComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturaxdespacharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
