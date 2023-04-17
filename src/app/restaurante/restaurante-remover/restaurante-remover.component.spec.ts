import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestauranteRemoverComponent } from './restaurante-remover.component';

describe('RestauranteRemoverComponent', () => {
  let component: RestauranteRemoverComponent;
  let fixture: ComponentFixture<RestauranteRemoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestauranteRemoverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestauranteRemoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
