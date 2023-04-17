import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CozinhaListarComponent } from './cozinha/cozinha-listar/cozinha-listar.component';
import { CozinhaBuscarComponent } from './cozinha/cozinha-buscar/cozinha-buscar.component';
import { CozinhaIncluirComponent } from './cozinha/cozinha-incluir/cozinha-incluir.component';
import { CozinhaAlterarComponent } from './cozinha/cozinha-alterar/cozinha-alterar.component';
import { CozinhaRemoverComponent } from './cozinha/cozinha-remover/cozinha-remover.component';
import { RestauranteBuscarComponent } from './restaurante/restaurante-buscar/restaurante-buscar.component';
import { RestauranteListarComponent } from './restaurante/restaurante-listar/restaurante-listar.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
