import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Superhero } from './superhero.interface';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HeroByRaceService {
  private apiUrl = 'https://akabab.github.io/superhero-api/api/';

  constructor(private http: HttpClient) { }
  
  getFourRandomHeroesByRace(race: string): Observable<Superhero[]> {
    return this.http.get<Superhero[]>(this.apiUrl + 'all.json').pipe(
      map((data: Superhero[]) => {
        const filteredHeroes = data.filter(hero => hero.appearance.race === race);
        const randomHeroes = this.getRandomElements(filteredHeroes, 4);
        return randomHeroes;
      })
    );
  }
  private getRandomElements(array: any[], numElements: number) {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numElements);
  }

}
