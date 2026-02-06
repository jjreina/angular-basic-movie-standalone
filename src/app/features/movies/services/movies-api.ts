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
      const newMoviesList = currentMovieList.movies.filter((movie) => movie.id !== idMovie); // creamos un nuevo array de películas filtrando la película con el id especificado
      currentMovieList.movies = newMoviesList; // modificamos el array de películas eliminando la película con el id especificado
      return currentMovieList; // devolvemos el objeto actualizado para que se refleje el cambio en la UI
    });
  }
}
