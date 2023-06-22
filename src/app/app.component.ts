import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'universe-of-things';
  showFavourites: boolean = false;

  toggleFavourites() {
    this.showFavourites = !this.showFavourites;
    console.log(this.showFavourites)
  }
}
