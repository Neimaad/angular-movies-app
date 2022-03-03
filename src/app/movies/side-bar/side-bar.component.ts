import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Genre, Movie } from '../services/movie.models';
import { MovieService } from '../services/movie.service';

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
        })
    }

}
