import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie } from './movie.models';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
    serverUrl = 'https://movie-api.benoithubert.me/';
    postsPath = 'movies/'

    constructor(private http: HttpClient){}

    getMovies(): Observable<Movie[]> {
        return this.http
            .get<Movie[]>(
                `${this.serverUrl}${this.postsPath}`
            )
            // .pipe(map((response) => 
            //     response.map((data) => ({
            //         id: data.id,
            //         genres: data.genres,
            //         title: data.title,
            //         overview: data.overview,
            //         release_date: data.release_date,
            //         vote_average: data.vote_average,
            //         language: data.language,
            //         poster_path: data.poster_path
            //     }))
            // ))
    }

    getMovieById(id: number): Observable<Movie> {
        return this.http
            .get<Movie>(
                `${this.serverUrl}${this.postsPath}${id}`
            )
    }

    
}
