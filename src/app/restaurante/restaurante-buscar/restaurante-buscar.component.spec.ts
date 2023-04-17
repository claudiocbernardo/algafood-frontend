import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestauranteBuscarComponent } from './restaurante-buscar.component';

describe('RestauranteBuscarComponent', () => {
  let component: RestauranteBuscarComponent;
  let fixture: ComponentFixture<RestauranteBuscarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestauranteBuscarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestauranteBuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
