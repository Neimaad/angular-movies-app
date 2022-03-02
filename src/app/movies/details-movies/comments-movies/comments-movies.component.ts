import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Movie, Comment } from '../../services/movie.models';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-comments-movies',
  templateUrl: './comments-movies.component.html',
  styleUrls: ['./comments-movies.component.css']
})
export class CommentsMoviesComponent implements OnInit {
    @Input() movie!: Movie;
    @Output() updatedCommentsEvent: EventEmitter<Comment> = new EventEmitter<Comment>();

    addComment: FormGroup  = this.formBuilder.group({
        id: '',
        rating: '',
        text: ''
    });

    constructor(
        private movieService: MovieService,
        private formBuilder: FormBuilder) { }

    ngOnInit(): void {
    }

    onSubmit(id: number){
        const formValue = this.addComment.value;
        this.movieService.postComment(id, formValue['rating'], formValue['text'])
            .subscribe({
                next: (updatedComments: any) => {
                    this.updatedCommentsEvent.emit(updatedComments);
                },
                error: (error) => {
                    console.log(error);
                }
            })
        this.addComment.reset();
    }

}
