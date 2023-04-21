import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.css']
})
export class PaginaInicialComponent implements OnInit{

  itens: MenuItem[] = [];

  constructor() {

  }

  ngOnInit(): void {
    this.itens = [
      {
        label: 'Cozinhas',
        //icon: 'pi pi-fw pi-file',
        items: [
          {
            label: 'Buscar Cozinha',
            routerLink: 'cozinhabuscar',
            //icon: 'pi pi-fw pi-bookmark'
        },
        {
            label: 'Listar Cozinhas',
            routerLink: 'cozinhalistar',
            //icon: 'pi pi-fw pi-video'
        },
        {
            label: 'Incluir Cozinha',
            routerLink: 'cozinhaIncluir',
            //icon: 'pi pi-fw pi-video'
        },
        {
            label: 'Alterar Cozinha',
            routerLink: 'cozinhaAlterar',
            //icon: 'pi pi-fw pi-video'
        },
        {
            label: 'Excluir Cozinha',
            routerLink: 'cozinhaRemover',
            //icon: 'pi pi-fw pi-video'
        }
        ]
      },
      {
        label: 'Restaurantes',
        //icon: 'pi pi-fw pi-file',
        items: [
          {
            label: 'Buscar Restaurante',
            routerLink: 'restauranteBuscar',
            //icon: 'pi pi-fw pi-bookmark'
        },
        {
            label: 'Listar Restaurantes',
            routerLink: 'restauranteListar',
            //icon: 'pi pi-fw pi-video'
        },
        {
          label: 'Incluir Restaurante',
          routerLink: 'restauranteIncluir',
          //icon: 'pi pi-fw pi-bookmark'
      },
      {
          label: 'Alterar Restaurantes',
          routerLink: 'restauranteAlterar',
          //icon: 'pi pi-fw pi-video'
      },
      {
        label: 'Exluir Restaurante',
        routerLink: 'restauranteExcluir',
        //icon: 'pi pi-fw pi-video'
    }
        ]
      },
    ]

  }


}
