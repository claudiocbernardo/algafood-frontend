import { Component, OnInit } from '@angular/core';
import { CozinhaService } from '../cozinha.service';
import { Cozinha } from 'src/app/domain/cozinha';

@Component({
  selector: 'app-cozinha-buscar',
  templateUrl: './cozinha-buscar.component.html',
  styleUrls: ['./cozinha-buscar.component.css']
})
export class CozinhaBuscarComponent implements OnInit{

  id: number = 0;
  cozinha: Cozinha = new Cozinha();

  constructor(private cozinhaService: CozinhaService) {

  }

  ngOnInit(): void {
    this.id = 1;
    this.buscarCozinha();
  }

  buscarCozinha() {
    this.cozinhaService.buscar(this.id).subscribe((resultado: any) => {
      this.cozinha = resultado;
    })
  }


}
