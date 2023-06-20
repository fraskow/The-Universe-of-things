import { Component } from '@angular/core';
import { SuperheroService } from '../superhero.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  images: string[] = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
    'image5.jpg',
    'image6.jpg',
    'image7.jpg',
    'image8.jpg',
    'image9.jpg',
    'image10.jpg',
    'image11.jpg',
    'image12.jpg',
  ];

  superheroes: any[] = [];

  constructor(private superheroService: SuperheroService) { }

  ngOnInit() {
    this.superheroService.getSuperheroes().subscribe(data => {
      this.superheroes = data;
    });
  }
}
