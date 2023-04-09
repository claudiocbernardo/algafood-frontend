import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Restaurante } from '../domain/restaurante';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestauranteService {

  private url = 'http://localhost:8080/restaurantes'

  constructor( private http: HttpClient) { }

  listar(): Observable<Restaurante[]> {
    return this.http.get<Restaurante[]>(this.url);
  }
}
