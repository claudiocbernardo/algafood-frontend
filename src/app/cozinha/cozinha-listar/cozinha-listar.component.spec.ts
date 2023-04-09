import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CozinhaListarComponent } from './cozinha-listar.component';

describe('CozinhaListarComponent', () => {
  let component: CozinhaListarComponent;
  let fixture: ComponentFixture<CozinhaListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CozinhaListarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CozinhaListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
