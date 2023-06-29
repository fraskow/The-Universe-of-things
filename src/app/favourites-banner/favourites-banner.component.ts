import { Component, OnInit } from '@angular/core';
import { FavouritesService } from '../favourites.service';
import { HeroByRaceService } from '../hero-by-race.service';
import { HttpClient } from '@angular/common/http'; 
import { Superhero } from '../superhero.interface';
@Component({
  selector: 'app-favourites-banner',
  templateUrl: './favourites-banner.component.html',
  styleUrls: ['./favourites-banner.component.scss']
})
export class FavouritesBannerComponent implements OnInit {
  showFavourites: boolean = false;
  randomRace: string = '';
  heroList: Superhero[] = [];
  constructor(
    private favouritesService: FavouritesService,
    private heroByRaceService: HeroByRaceService, 
    private http: HttpClient 
  ) {}

  ngOnInit() {
        this.favouritesService.showFavourites$.subscribe(showFavourites => {
        this.showFavourites = showFavourites;
        const races = ["Human", "Mutant","Cosmic Entity","Asgardian","God / Eternal" ];
        const randomIndex = Math.floor(Math.random() * races.length);
        this.randomRace=races[randomIndex]
        this.heroByRaceService.getFourRandomHeroesByRace(this.randomRace).subscribe(heroes => {
        this.heroList = heroes;
      });
    });
  }
  

 
  }
