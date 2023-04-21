import { Restaurante } from 'src/app/domain/restaurante';
import { RestauranteService } from './../restaurante.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurante-alterar',
  templateUrl: './restaurante-alterar.component.html',
  styleUrls: ['./restaurante-alterar.component.css']
})
export class RestauranteAlterarComponent implements OnInit{

  id: number = 0;
  restaurante: Restaurante = new Restaurante();

  constructor(private restauranteService:  RestauranteService) {

  }

  ngOnInit(): void {

    this.id = 2;
    this.buscarRestaurante();
    setTimeout(() => {
      this.alterarRestaurante();
    }, 1000);

  }

  alterarRestaurante() {

    this.restauranteService.alterar(this.id, this.restaurante).subscribe((resultado) => {
      this.restaurante = resultado;
    }),
    (error: any) => {
      alert("Erro ao alterar restaurante");
    }

  }

  buscarRestaurante() {
    this.restauranteService.buscar(this.id).subscribe(restaurante => {
      this.restaurante = restaurante;
      this.restaurante.nome = "La Mole";
    }),
    (error: any) => {
      alert("Restaurante não encontrado");
    }
  }



}
