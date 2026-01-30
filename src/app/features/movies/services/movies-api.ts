import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';
import { moviesMock } from '../mocks/movies-mock';

@Injectable({
  providedIn: 'root',
})
export class MoviesApi {
  public movies: Movie[] = moviesMock;
}
