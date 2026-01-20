import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Movies } from './features/movies/movies';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Movies],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title: string = 'Angular Movies';
}
