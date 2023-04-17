import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestauranteAlterarComponent } from './restaurante-alterar.component';

describe('RestauranteAlterarComponent', () => {
  let component: RestauranteAlterarComponent;
  let fixture: ComponentFixture<RestauranteAlterarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestauranteAlterarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestauranteAlterarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
