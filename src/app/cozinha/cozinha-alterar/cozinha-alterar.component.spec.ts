import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CozinhaAlterarComponent } from './cozinha-alterar.component';

describe('CozinhaAlterarComponent', () => {
  let component: CozinhaAlterarComponent;
  let fixture: ComponentFixture<CozinhaAlterarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CozinhaAlterarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CozinhaAlterarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
