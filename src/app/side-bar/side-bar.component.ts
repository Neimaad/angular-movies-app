import { Component, OnInit } from '@angular/core';
import { Genre } from '../movies/services/movie.models';
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
        })
    }

}
