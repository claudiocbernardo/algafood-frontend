import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestauranteIncluirComponent } from './restaurante-incluir.component';

describe('RestauranteIncluirComponent', () => {
  let component: RestauranteIncluirComponent;
  let fixture: ComponentFixture<RestauranteIncluirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestauranteIncluirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestauranteIncluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
