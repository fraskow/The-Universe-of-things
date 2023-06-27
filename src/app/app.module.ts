import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SuperheroService } from './superhero.service';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FavouritesBannerComponent } from './favourites-banner/favourites-banner.component';
import { HeroeDayBannerComponent } from './heroe-day-banner/heroe-day-banner.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent, 
    GalleryComponent,
    FavouritesBannerComponent,
    GalleryComponent, HeroeDayBannerComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
    FormsModule
  ],
  providers: [SuperheroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
