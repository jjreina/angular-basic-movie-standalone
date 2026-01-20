import { Component } from '@angular/core';
import { Movie } from '../models/model';
import { moviesMock } from '../mocks/movies-mock';

@Component({
  selector: 'app-movies',
  imports: [],
  templateUrl: './movies.html',
  styleUrl: './movies.css',
})
export class Movies {
  protected movies: Movie[] = moviesMock;
}
