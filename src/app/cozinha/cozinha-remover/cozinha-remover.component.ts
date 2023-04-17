import { CozinhaService } from './../cozinha.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cozinha-remover',
  templateUrl: './cozinha-remover.component.html',
  styleUrls: ['./cozinha-remover.component.css']
})
export class CozinhaRemoverComponent implements OnInit{


  id: number = 0;

  constructor(private cozinhaService: CozinhaService ) {

  }

  ngOnInit(): void {
    this.id = 3;
    this.removerCozinha();
  }

  removerCozinha() {
    this.cozinhaService.remover(this.id).subscribe(resultado => {
      alert("Cozinha removida com sucesso");
    }),
    (error: any) => {
      console.log(error);
      alert("Erro na remoção de Cozinha");
    };
  }

}
