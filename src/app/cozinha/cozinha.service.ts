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

  buscar(id: number): Observable<any> {
    return this.http.get(this.url + id);
  }

  incluir(cozinha: Cozinha) : Observable<Cozinha> {
    return this.http.post<Cozinha>(this.url , cozinha);
  }

  alterar(id: number, cozinha: Cozinha): Observable<Cozinha> {
    return this.http.put<Cozinha>(this.url + id, cozinha);
  }

  remover(id: number): Observable<Cozinha> {
    return this.http.delete<Cozinha>(this.url + id);
  }

}
