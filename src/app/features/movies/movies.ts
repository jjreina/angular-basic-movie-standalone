import { Component } from '@angular/core';
import { ListMovies } from './components/list-movies/list-movies';
import { MoviesApi } from './services/movies-api';
import { Movie } from './models/movie';

@Component({
  selector: 'app-movies',
  imports: [ListMovies],
  templateUrl: './movies.html',
  styleUrl: './movies.css',
})
export class Movies {
  constructor(public moviesApi: MoviesApi) {}

  protected removeMovieById(id: string) {
    this.moviesApi.removeMovieById(id);
  }
}
