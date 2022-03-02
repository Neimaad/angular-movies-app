
export class Movie {
    id!: number;
    genres!: Genre[];
    title!: string;
    tagline?: string;
    overview!: string;
    release_date!: string;
    runtime?: number;
    vote_average!: string;
    language!: string;
    poster_path!: string;
    comments?: Comment[];
}
export class Genre {
    id!: number;
    name!: string;
}
export class Comment {
    id!: number;
    movieId!: number;
    text!: string;
    rating!: number;
    date!: string;
}