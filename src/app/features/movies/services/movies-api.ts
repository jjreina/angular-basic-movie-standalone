import { Injectable } from '@angular/core';
import { MovieResponse } from '../models/movie';
import { httpResource } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MoviesApi {
  private readonly url: string = 'http://localhost:3000/response';

  public readonly getAllMovies = httpResource<MovieResponse>(() => this.url);
}
