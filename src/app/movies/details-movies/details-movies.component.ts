import { Component, OnInit } from '@angular/core';
import { Genre, Movie } from 'src/app/movies/services/movies.models';

@Component({
  selector: 'app-details-movies',
  templateUrl: './details-movies.component.html',
  styleUrls: ['./details-movies.component.css']
})
export class DetailsMoviesComponent implements OnInit {
    movie?: Movie;

    constructor() { }

    ngOnInit(): void {

        // const id = Number(this.route.snapshot.paramMap.get('id'));
        // this.postService.getPost(id)
        //     .then(post => {
        //         this.post = post;
        //     });
    }

}
