import { Restaurante } from 'src/app/domain/restaurante';
import { RestauranteService } from './../restaurante.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurante-buscar',
  templateUrl: './restaurante-buscar.component.html',
  styleUrls: ['./restaurante-buscar.component.css']
})
export class RestauranteBuscarComponent implements OnInit{

  id: number = 0
  restaurante: Restaurante = new Restaurante()

  constructor(private restauranteService: RestauranteService) {

  }

  ngOnInit(): void {
    this.id = 1;
    this.buscarRestaurante()
  }

  buscarRestaurante() {
    this.restauranteService.buscar(this.id).subscribe(restaurante => {
      this.restaurante = restaurante;
    }),
    (error: any) => {
      alert("Restaurante não encontrado");
    }
  }


}
