import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDishdetailsComponent } from './app-dishdetails.component';

describe('AppDishdetailsComponent', () => {
  let component: AppDishdetailsComponent;
  let fixture: ComponentFixture<AppDishdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppDishdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDishdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
