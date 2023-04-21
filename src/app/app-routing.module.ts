import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CozinhaListarComponent } from './cozinha/cozinha-listar/cozinha-listar.component';
import { CozinhaBuscarComponent } from './cozinha/cozinha-buscar/cozinha-buscar.component';
import { CozinhaIncluirComponent } from './cozinha/cozinha-incluir/cozinha-incluir.component';
import { CozinhaAlterarComponent } from './cozinha/cozinha-alterar/cozinha-alterar.component';
import { CozinhaRemoverComponent } from './cozinha/cozinha-remover/cozinha-remover.component';
import { RestauranteBuscarComponent } from './restaurante/restaurante-buscar/restaurante-buscar.component';
import { RestauranteListarComponent } from './restaurante/restaurante-listar/restaurante-listar.component';
import { RestauranteIncluirComponent } from './restaurante/restaurante-incluir/restaurante-incluir.component';
import { RestauranteAlterarComponent } from './restaurante/restaurante-alterar/restaurante-alterar.component';
import { RestauranteRemoverComponent } from './restaurante/restaurante-remover/restaurante-remover.component';

const routes: Routes = [
  {
    path: 'cozinhabuscar',
    component: CozinhaBuscarComponent
  },
  {
    path: 'cozinhalistar',
    component: CozinhaListarComponent
  },
  {
    path: 'cozinhaIncluir',
    component: CozinhaIncluirComponent
  },
  {
    path: 'cozinhaAlterar',
    component: CozinhaAlterarComponent
  },
  {
    path: 'cozinhaRemover',
    component: CozinhaRemoverComponent
  },
  {
    path: 'restauranteBuscar',
    component: RestauranteBuscarComponent
  },
  {
    path: 'restauranteListar',
    component: RestauranteListarComponent
  },
  {
    path: 'restauranteIncluir',
    component: RestauranteIncluirComponent
  },
  {
    path: 'restauranteAlterar',
    component: RestauranteAlterarComponent
  },
  {
    path: 'restauranteExcluir',
    component: RestauranteRemoverComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
