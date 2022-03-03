import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../services/movie.models';

@Component({
  selector: 'app-card-movies',
  templateUrl: './card-movies.component.html',
  styleUrls: ['./card-movies.component.css']
})
export class CardMoviesComponent implements OnInit {
    @Input() movie!: Movie;

    constructor() { }

    ngOnInit(): void {
    }

}
