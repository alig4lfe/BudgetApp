export class Movie {
    $key:string;
    title:string;
    rating?:string;
    review?:string;
    adult?:boolean;
    backdrop_path?:string;
    genre_ids?:any[];
    id?: number;
    original_language?: string;
    original_title?: string;
    overview?: string;
    popularity?:number;
    poster_path:string;
    poster_url?:string = this.poster_path;
    release_date?: string;
    video?: boolean;
    vote_average?: number;
    vote_count?: number
}
