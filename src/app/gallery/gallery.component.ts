import { Component } from '@angular/core';
import { SuperheroService } from '../superhero.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  
  superheroes: any[] = [];

  constructor(private superheroService: SuperheroService) { }

  ngOnInit() {
    this.superheroService.getSuperheroes().subscribe(data => {
      this.superheroes = data;
    });
  }
}
