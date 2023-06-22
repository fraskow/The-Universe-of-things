import { Component} from '@angular/core';
import { FavouritesService } from '../favourites.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  showFavourites: boolean = false;

  constructor(private favouritesService: FavouritesService) {}

  ngOnInit() {
    this.favouritesService.showFavourites$.subscribe(showFavourites => {
      this.showFavourites = showFavourites;
    });
  }

  toggleShowFavourites() {
    this.favouritesService.toggleShowFavourites(!this.showFavourites);
  }
}