import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CozinhaListarComponent } from './cozinha/cozinha-listar/cozinha-listar.component';
import { CozinhaBuscarComponent } from './cozinha/cozinha-buscar/cozinha-buscar.component';
import { CozinhaIncluirComponent } from './cozinha/cozinha-incluir/cozinha-incluir.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
