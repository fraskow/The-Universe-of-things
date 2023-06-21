import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Superhero } from './superhero.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SuperheroService {
  private apiUrl = 'https://akabab.github.io/superhero-api/api/';

  constructor(private http: HttpClient) { }

  getSuperheroes(): Observable<Superhero[]> {
    return this.http.get<Superhero[]>(this.apiUrl + 'all.json').pipe(
      map((data: Superhero[]) => {
        const randomIndices: number[] = [];
        while (randomIndices.length < 100) {
          const randomIndex = Math.floor(Math.random() * data.length);
          if (!randomIndices.includes(randomIndex)) {
            randomIndices.push(randomIndex);
          }
        }
        return randomIndices.map(index => data[index]);
      })
    );
  }

  getSuperheroById(id: string): Observable<Superhero> {
    return this.http.get<Superhero>(this.apiUrl + 'id/' + id + '.json');
  }
}
