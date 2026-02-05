import { Component, input, output } from '@angular/core';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-card-movie',
  imports: [],
  templateUrl: './card-movie.html',
  styleUrl: './card-movie.css',
})
export class CardMovie {
  public movie = input.required<Movie>();
  protected onMovieSelected = output<string>();
  protected onMovieDelete = output<string>();

  protected selectMovie(title: string): void {
    this.onMovieSelected.emit(title);
  }

  protected deleteMovie(id: string): void {
    this.onMovieDelete.emit(id);
  }
}
