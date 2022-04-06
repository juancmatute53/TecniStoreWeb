import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormcategoriesComponent } from './formcategories.component';

describe('FormcategoriesComponent', () => {
  let component: FormcategoriesComponent;
  let fixture: ComponentFixture<FormcategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormcategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormcategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
