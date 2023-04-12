import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CozinhaListarComponent } from './cozinha/cozinha-listar/cozinha-listar.component';
import { CozinhaBuscarComponent } from './cozinha/cozinha-buscar/cozinha-buscar.component';
import { CozinhaIncluirComponent } from './cozinha/cozinha-incluir/cozinha-incluir.component';
import { CozinhaAlterarComponent } from './cozinha/cozinha-alterar/cozinha-alterar.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
