import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestauranteListarComponent } from './restaurante-listar.component';

describe('RestauranteListarComponent', () => {
  let component: RestauranteListarComponent;
  let fixture: ComponentFixture<RestauranteListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestauranteListarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestauranteListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
