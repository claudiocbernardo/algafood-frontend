import { Restaurante } from 'src/app/domain/restaurante';
import { RestauranteService } from './../restaurante.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurante-remover',
  templateUrl: './restaurante-remover.component.html',
  styleUrls: ['./restaurante-remover.component.css']
})
export class RestauranteRemoverComponent implements OnInit {

  id: number = 0;

  constructor(private restauranteService: RestauranteService) {

  }

  ngOnInit(): void {
    this.id = 5;
    this.excluirRestaurante();
  }

  excluirRestaurante() {
    this.restauranteService.excluir(this.id).subscribe((resultado: any) => {
      console.log(resultado);
    }),
    (error: any) => {
      alert("Erro ao tentar excluir Restaurante");
    }
  }



}
