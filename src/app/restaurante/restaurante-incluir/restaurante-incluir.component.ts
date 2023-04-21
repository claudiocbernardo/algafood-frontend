import { Component, OnInit } from '@angular/core';
import { Restaurante } from 'src/app/domain/restaurante';
import { RestauranteService } from '../restaurante.service';
import { Cozinha } from 'src/app/domain/cozinha';

@Component({
  selector: 'app-restaurante-incluir',
  templateUrl: './restaurante-incluir.component.html',
  styleUrls: ['./restaurante-incluir.component.css']
})
export class RestauranteIncluirComponent implements OnInit {

  restaurante: Restaurante = new Restaurante();

  constructor(private restauranteService: RestauranteService) {

  }

  ngOnInit(): void {

    let cozinhas: Cozinha[] = [];
    let cozinha: Cozinha = new Cozinha();

    cozinha.id = 2;
    cozinhas.push(cozinha);

    this.restaurante.nome = "Benkey";
    this.restaurante.taxaFrete = 5.1;
    this.restaurante.cozinha = cozinha;

    this.incluirRestaurante();

  }

  incluirRestaurante() {
    this.restauranteService.incluir(this.restaurante).subscribe((restaurante) => {
      this.restaurante = restaurante;
    }),
    (error: any) => {
      alert('Erro ao incluir Restaurante');
    }
  }


}
