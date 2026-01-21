import { Component, input } from '@angular/core';
import { Movie } from '../../models/movie';
import { CardMovie } from '../card-movie/card-movie';

@Component({
  selector: 'app-list-movies',
  imports: [CardMovie],
  templateUrl: './list-movies.html',
  styleUrl: './list-movies.css',
})
export class ListMovies {
  public movies = input<Movie[]>();
}
