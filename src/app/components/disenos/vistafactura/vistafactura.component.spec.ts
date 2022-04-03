import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistafacturaComponent } from './vistafactura.component';

describe('VistafacturaComponent', () => {
  let component: VistafacturaComponent;
  let fixture: ComponentFixture<VistafacturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistafacturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistafacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
