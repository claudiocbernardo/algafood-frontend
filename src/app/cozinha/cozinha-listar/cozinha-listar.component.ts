import { Component, OnInit } from '@angular/core';
import { CozinhaService } from '../cozinha.service';
import { Cozinha } from 'src/app/domain/cozinha';

@Component({
  selector: 'app-cozinha-listar',
  templateUrl: './cozinha-listar.component.html',
  styleUrls: ['./cozinha-listar.component.css']
})
export class CozinhaListarComponent implements OnInit {


  listaCozinhas: Cozinha[] = [];


  constructor(private cozinhaService: CozinhaService ){

  }

  ngOnInit(): void {

    this.carregarListaCozinhas();

  }

  carregarListaCozinhas() {
    this.cozinhaService.listar().subscribe((res: Cozinha[] ) => {
      this.listaCozinhas = res
    }),
    (error: any) => {
      alert("Lista não carregada");
    }

    console.log(this.listaCozinhas)
  }

}
