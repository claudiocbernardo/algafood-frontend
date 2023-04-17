import { CozinhaService } from './../cozinha.service';
import { Component, OnInit } from '@angular/core';
import { Cozinha } from 'src/app/domain/cozinha';

@Component({
  selector: 'app-cozinha-alterar',
  templateUrl: './cozinha-alterar.component.html',
  styleUrls: ['./cozinha-alterar.component.css']
})
export class CozinhaAlterarComponent implements OnInit {

  cozinha: Cozinha = new Cozinha();
  id: number = 0

  constructor(
    private cozinhaService: CozinhaService
  ) {

  }


  ngOnInit(): void {
    this.id = 2;
    this.cozinha.nome = "Francesa";
    this.alterarCozinha();
  }

  alterarCozinha() {
    this.cozinhaService.alterar(this.id, this.cozinha);
  }



}
