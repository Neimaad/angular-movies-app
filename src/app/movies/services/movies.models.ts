
export class Movie {
    id!: number;
    genres!: Genre[];
    title!: string;
    tagline!: string;
    description!: string;
    release_date!: string;
    duration!: number;
    rating!: string;
    language!: string;
    image: string = "";
}
export class Genre {
    id!: number;
    name!: string;
}