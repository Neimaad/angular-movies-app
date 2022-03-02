
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
}
export class Genre {
    id!: number;
    name!: string;
}