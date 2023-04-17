import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CozinhaRemoverComponent } from './cozinha-remover.component';

describe('CozinhaRemoverComponent', () => {
  let component: CozinhaRemoverComponent;
  let fixture: ComponentFixture<CozinhaRemoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CozinhaRemoverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CozinhaRemoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
