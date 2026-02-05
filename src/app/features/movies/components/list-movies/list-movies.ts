import { Component, input, output } from '@angular/core';
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
  public onEmitIdMovie = output<string>();
  protected selectedMovie = '';

  protected setTitle(title: string): void {
    this.selectedMovie = title;
  }

  protected emitIdMovie(id: string): void {
    this.onEmitIdMovie.emit(id);
  }
}
