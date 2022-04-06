import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaxclienteComponent } from './facturaxcliente.component';

describe('FacturaxclienteComponent', () => {
  let component: FacturaxclienteComponent;
  let fixture: ComponentFixture<FacturaxclienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacturaxclienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturaxclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
