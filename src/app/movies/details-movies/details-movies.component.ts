import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie, Comment } from 'src/app/movies/services/movie.models';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-details-movies',
  templateUrl: './details-movies.component.html',
  styleUrls: ['./details-movies.component.css']
})
export class DetailsMoviesComponent implements OnInit, OnChanges {
    movie?: Movie;

    constructor(
        private route: ActivatedRoute,
        private movieService: MovieService) { }

    ngOnInit(): void {
        const id = Number(this.route.snapshot.paramMap.get('id'));
        this.movieService.getMovieById(id)
            .subscribe(response => {
                this.movie = response
            })
    }

    ngOnChanges(): void {
        this.movie = this.movie;
    }

    updateComments(updatedComments: Comment) {
        this.movie!.comments!.push(updatedComments);
    }

}
