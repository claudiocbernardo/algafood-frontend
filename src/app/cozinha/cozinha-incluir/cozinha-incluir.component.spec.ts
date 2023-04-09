import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CozinhaIncluirComponent } from './cozinha-incluir.component';

describe('CozinhaIncluirComponent', () => {
  let component: CozinhaIncluirComponent;
  let fixture: ComponentFixture<CozinhaIncluirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CozinhaIncluirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CozinhaIncluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
