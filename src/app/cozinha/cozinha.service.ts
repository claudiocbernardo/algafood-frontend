import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Cozinha } from '../domain/cozinha';

// import { Cozinha}

@Injectable({
  providedIn: 'root'
})
export class CozinhaService {


  private url = 'http://localhost:8080/cozinhas/'

  constructor( private http: HttpClient) { }

  listar(): Observable<Cozinha[]> {
    return this.http.get<Cozinha[]>(this.url);
  }

  incluir(cozinha: Cozinha) : Observable<Cozinha> {
    return this.http.post<Cozinha>(this.url, cozinha);
  }

}