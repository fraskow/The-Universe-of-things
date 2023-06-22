import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {
  private showFavouritesSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public showFavourites$ = this.showFavouritesSubject.asObservable();

  constructor() {}

  toggleShowFavourites(showFavourites: boolean) {
    this.showFavouritesSubject.next(showFavourites);
  }
}
