import { Component, input } from '@angular/core';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-card-movie',
  imports: [],
  templateUrl: './card-movie.html',
  styleUrl: './card-movie.css',
})
export class CardMovie {
  public movie = input<Movie>();
}
