import { Injectable } from '@angular/core';
import { MovieResponse } from '../models/movie';
import { httpResource } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MoviesApi {
  private readonly url: string = 'http://localhost:3000/response';

  public readonly getAllMovies = httpResource<MovieResponse>(() => this.url);

  public removeMovieById(idMovie: string): void {
    this.getAllMovies.update((currentMovieList) => {
      if (!currentMovieList) return currentMovieList; // mientras carga. current = this.getAllMovies.value()
      return {
        ...currentMovieList, // spread operator mantenemos el resto de las propiedades
        movies: currentMovieList.movies.filter((movie) => movie.id !== idMovie), // modificamos solo la propiedad movies, filtrando el array para eliminar la película con el id especificado
      };
    });
  }
}
