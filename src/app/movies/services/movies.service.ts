import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Movie } from './movies.models';


@Injectable({
  providedIn: 'root'
})
export class PostService {
    serverUrl = 'https://movie-api.benoithubert.me/';
    postsPath = 'movies/'


    constructor(private http: HttpClient){}

    getAllPosts(): Observable<Movie[]> {
        return this.http
            .get<Movie[]>(   // api me renvoi un Post[]
                `${this.serverUrl}${this.postsPath}`
            )
            .pipe(
            );
    }

    
}
