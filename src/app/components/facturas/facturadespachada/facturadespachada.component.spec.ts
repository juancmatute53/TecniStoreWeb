import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturadespachadaComponent } from './facturadespachada.component';

describe('FacturadespachadaComponent', () => {
  let component: FacturadespachadaComponent;
  let fixture: ComponentFixture<FacturadespachadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacturadespachadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturadespachadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
