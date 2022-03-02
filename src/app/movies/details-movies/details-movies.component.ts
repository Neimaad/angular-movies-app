import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Genre, Movie } from 'src/app/movies/services/movie.models';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-details-movies',
  templateUrl: './details-movies.component.html',
  styleUrls: ['./details-movies.component.css']
})
export class DetailsMoviesComponent implements OnInit {
    movie?: Movie;

    constructor(private route: ActivatedRoute, private movieService: MovieService) { }

    ngOnInit(): void {
        const id = Number(this.route.snapshot.paramMap.get('id'));
        this.movieService.getMovieById(id)
            .subscribe(response => {
                this.movie = response
            })
    }

}
