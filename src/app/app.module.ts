import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { FormsModule } from '@angular/forms';
import { MenubarModule } from 'primeng/menubar';
import { CozinhaListarComponent } from './cozinha/cozinha-listar/cozinha-listar.component';
import { RestauranteListarComponent } from './restaurante/restaurante-listar/restaurante-listar.component';
import { CozinhaBuscarComponent } from './cozinha/cozinha-buscar/cozinha-buscar.component';
import { FieldsetModule } from 'primeng/fieldset';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CozinhaIncluirComponent } from './cozinha/cozinha-incluir/cozinha-incluir.component';
import { CozinhaAlterarComponent } from './cozinha/cozinha-alterar/cozinha-alterar.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaInicialComponent,
    CozinhaListarComponent,
    RestauranteListarComponent,
    CozinhaBuscarComponent,
    CozinhaIncluirComponent,
    CozinhaAlterarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MenubarModule,
    FieldsetModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
