import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SuperheroService } from './superhero.service';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { DetailHeroComponent } from './detail-hero/detail-hero.component';
import { PopupCourseComponent } from './detail-hero/popup-course/popup-course.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent, 
    GalleryComponent,
    DetailHeroComponent,
    PopupCourseComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule
  ],
  providers: [SuperheroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
