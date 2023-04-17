import { Component, OnInit } from '@angular/core';
import { Restaurante } from 'src/app/domain/restaurante';
import { RestauranteService } from '../restaurante.service';

@Component({
  selector: 'app-restaurante-listar',
  templateUrl: './restaurante-listar.component.html',
  styleUrls: ['./restaurante-listar.component.css']
})
export class RestauranteListarComponent implements OnInit{

  listaRestaurantes: Restaurante[] = [];

  constructor(private restauranteService: RestauranteService) {

  }


  ngOnInit(): void {

    this.carregaListaRestaurantes();

  }

  carregaListaRestaurantes() {
    this.restauranteService.listar().subscribe((restaurantes) => {
      this.listaRestaurantes = restaurantes;
    }),
    (error: any) => {
      alert("Lista de Restaurantes não encontrada");
    }
  }

}
