import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  url_personajes = 'https://rickandmortyapi.com/api/character?page=7';
  url_localizacion = 'https://rickandmortyapi.com/api/location';
  url_filtrado = 'https://rickandmortyapi.com/api/character/?name=';
  url_episodios = 'https://rickandmortyapi.com/api/episode';

  constructor(private http:HttpClient) {

   }
   allPersonajes():Observable<any>{
    return this.http.get(`${this.url_personajes}`);
  }
  all_episodios():Observable<any>{
    return this.http.get(`${this.url_episodios}`);
  }
  all_ubicaciones():Observable<any>{
    return this.http.get(`${this.url_localizacion}`);
  }
}
