import { Component } from '@angular/core';
import { Movie } from './models/movie';
import { moviesMock } from './mocks/movies-mock';
import { ListMovies } from './components/list-movies/list-movies';

@Component({
  selector: 'app-movies',
  imports: [ListMovies],
  templateUrl: './movies.html',
  styleUrl: './movies.css',
})
export class Movies {
  protected movies: Movie[] = moviesMock;
}
