import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CozinhaBuscarComponent } from './cozinha-buscar.component';

describe('CozinhaBuscarComponent', () => {
  let component: CozinhaBuscarComponent;
  let fixture: ComponentFixture<CozinhaBuscarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CozinhaBuscarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CozinhaBuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
