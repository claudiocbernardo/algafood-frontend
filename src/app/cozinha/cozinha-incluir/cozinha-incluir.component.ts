import { Component, OnInit } from '@angular/core';
import { Cozinha } from 'src/app/domain/cozinha';
import { CozinhaService } from '../cozinha.service';

@Component({
  selector: 'app-cozinha-incluir',
  templateUrl: './cozinha-incluir.component.html',
  styleUrls: ['./cozinha-incluir.component.css']
})
export class CozinhaIncluirComponent implements OnInit{

  cozinha: Cozinha = new Cozinha();

  constructor(private cozinhaService: CozinhaService) {

  }

  ngOnInit(): void {
    this.cozinha.nome = "Argentina";
    this.incluirCozinha();
  }

  incluirCozinha() {
    this.cozinhaService.incluir(this.cozinha).subscribe(() => {
      
    });
  }

}
