import { Component, OnInit } from '@angular/core';
import { getCurrentDateTime } from '../../assets/Ts/dateHour';
import { FavouritesService } from '../favourites.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  showFavourites: boolean = false;

  constructor(private favouritesService: FavouritesService) {}

  ngOnInit() {
    getCurrentDateTime();
    setInterval(getCurrentDateTime, 1000);

    this.favouritesService.showFavourites$.subscribe(showFavourites => {
      this.showFavourites = showFavourites;
    });
  }

  toggleShowFavourites() {
    this.favouritesService.toggleShowFavourites(!this.showFavourites);
  }
}