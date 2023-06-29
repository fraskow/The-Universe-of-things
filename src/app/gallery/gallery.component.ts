import { Component } from '@angular/core';
import { SuperheroService } from '../superhero.service';
import { FavouritesService } from '../favourites.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  images: string[] = [
  ];
  superheroes: any[] = [];
  filteredSuperheroes: any[] = [];
  showFavourites: boolean = false;
  hasHeroes: boolean = false;
  constructor(private superheroService: SuperheroService, private favouritesService: FavouritesService) { }
  
  ngOnInit() {
    this.superheroService.getSuperheroes().subscribe(data => {
      this.superheroes = data;
      this.filteredSuperheroes = this.superheroes;
    });
    this.favouritesService.showFavourites$.subscribe(showFavourites => {
      this.showFavourites = showFavourites;
    });
  }

  getFilteredSuperheroes(): any[] {

    if (this.showFavourites) {
      this.hasHeroes = this.filteredSuperheroes.filter(hero => hero.favourite).length > 12;
      console.log(this.hasHeroes)
      return this.filteredSuperheroes.filter(hero => hero.favourite);
    } else {
      this.hasHeroes = true
      return this.filteredSuperheroes;
    }
  }

  }


