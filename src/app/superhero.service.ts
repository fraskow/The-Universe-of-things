import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Superhero } from './superhero.interface';

@Injectable({
  providedIn: 'root'
})
export class SuperheroService {
  private apiUrl = 'https://akabab.github.io/superhero-api/api/';

  constructor(private http: HttpClient) {}

  getSuperheroes(): Observable<Superhero[]> {
    return this.http.get<Superhero[]>(this.apiUrl + 'all.json');
  }

  getSuperheroById(id: string): Observable<Superhero> {
    return this.http.get<Superhero>(this.apiUrl + 'id/' + id + '.json');
  }
}
