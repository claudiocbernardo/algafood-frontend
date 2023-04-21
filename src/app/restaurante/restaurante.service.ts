import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Restaurante } from '../domain/restaurante';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestauranteService {

  private url = 'http://localhost:8080/restaurantes/'

  constructor( private http: HttpClient) { }

  listar(): Observable<Restaurante[]> {
    return this.http.get<Restaurante[]>(this.url);
  }

  buscar(id: number): Observable<Restaurante> {
    return this.http.get(this.url + id);
  }

  incluir(restaurante: Restaurante): Observable<Restaurante> {
    return this.http.post<Restaurante>(this.url, restaurante);
  }

  alterar(id: number, restaurante: Restaurante): Observable<Restaurante> {
    return this.http.put<Restaurante>(this.url + id, restaurante);
  }

  excluir(id: number): Observable<Restaurante> {
    return this.http.delete(this.url + id);
  }
}
