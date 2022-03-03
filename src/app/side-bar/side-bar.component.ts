import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Genre, Movie } from '../movies/services/movie.models';
import { MovieService } from '../movies/services/movie.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
    genres!: Genre[];
    
    constructor(private movieService: MovieService) { }

    ngOnInit(): void {
        this.movieService.getGenres()
            .subscribe(response => {
                this.genres = response;
                this.genres = this.genres.sort((genre1, genre2) => genre1.name.localeCompare(genre2.name))
        })
    }

}
