import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';


import { searchResponse } from '../search-response';
import { MovieService } from '../movies/shared/movie.service';
import { Movie } from '../movies/shared/movie.model';

@Component({
  selector: 'app-new-movie-screen',
  templateUrl: './new-movie-screen.component.html',
  styleUrls: ['./new-movie-screen.component.css'],
  providers: [MovieService]
})
export class NewMovieScreenComponent implements OnInit {

  constructor(private http: HttpClient, public movieService:MovieService) { }
  temp: Movie = new Movie();
  restItems: searchResponse = {};
  baseImgURL: string = 'https://image.tmdb.org/t/p/w500/';
  movieTitle: string;
  restItemsUrl = 'http://www.omdbapi.com/?t='+this.movieTitle+'&apikey=fad27a7c';
  selectedMovieURL: string;
  getSearchItems(): void {
    this.search(this.movieTitle)
      .subscribe(
        restItems => {
          this.restItems = restItems;
           console.log(this.restItems);
        }
      );
  }
  search(term: string) {
    return this.http
    .get<searchResponse>(`https://api.themoviedb.org/3/search/movie?api_key=5600baccd385441e1c4e60731030b5fb&query=${term}`)
    .pipe(map(data => data));
  }
  onKeyDown(event){
    this.getSearchItems();
  }

  watched(movie:any){
    this.temp.title = movie.title;
    this.temp.poster_url = this.baseImgURL + movie.poster_path;
    this.movieService.insertMovie(this.temp);
  }
  toWatch(movie:any){
    this.temp.title = movie.title;
    this.temp.poster_url = this.baseImgURL + movie.poster_path;
    this.movieService.insertIntoToWatchList(this.temp);
  }
  currentlySelected(url:string){
    this.selectedMovieURL = url;
  }

  ngOnInit() {
    this.getSearchItems();
    this.selectedMovieURL = "";
  }

}
