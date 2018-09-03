import { Component, OnInit, Inject } from '@angular/core';
import { movieDataBase, toWatchDataBase } from '../moviesDB';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { searchResponse } from '../search-response';
import { MovieService } from '../movies/shared/movie.service';
import { Movie } from '../movies/shared/movie.model';
import { Router } from '@angular/router';
import { MovieListComponent } from '../movies/movie-list/movie-list.component';
import { Http, Response } from '@angular/http';
import { pipe, Observable } from 'rxjs';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';


@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css'],
  providers: [MovieService, MovieDetailsComponent]
})
export class HomeScreenComponent implements OnInit {
  movieTitle:string = "";
  title = 'app';
  movieDataBase = new movieDataBase;
  restItems: searchResponse = {};
  imgItem: string
  restItemsUrl = 'http://www.omdbapi.com/?t='+this.movieTitle+'&apikey=fad27a7c';
  // imgURL = 'http://img.omdbapi.com/?t='+this.movieTitle+'&apikey=fad27a7c';
  baseImgURL: string;
  appendImgURL: string;
  fullImgURL: string;
  temp: Movie = new Movie();
  watchedMovies:Movie[] = [];
  items: any = [];
  movieList: Movie[];
  selectedMovieURL: string; 

  
  constructor(private http: HttpClient, public movieService:MovieService, private movieDb:movieDataBase, private router: Router, private toWatchDb:toWatchDataBase, public dialog: MatDialog) {}

  ngOnInit() {
    
    this.baseImgURL = 'https://image.tmdb.org/t/p/w500/';
    this.appendImgURL = "";
    this.movieTitle = "";
    this.fullImgURL = this.baseImgURL + this.appendImgURL;
    this.movieService.getWatchedData();
    this.movieService.getToWatchData();
    this.selectedMovieURL = '';
    
   
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '800px', height: '800px',
      data :this.restItems
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


// Returns response from searching for a specific movie and stores it into restItems 
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

// adds movie to list 
  add(temp:any){
    console.log(temp);
    this.temp.title = temp.title;
    this.temp.poster_url = this.baseImgURL + temp.poster_path;
    this.movieService.insertMovie(this.temp); 
  }
// removes movie from list 
remove(temp:string){
  console.log(temp);
  this.movieService.deleteMovie(temp);
}



addToToWatch(temp:any){
  console.log(temp);
  this.temp.title = temp.title;
  this.temp.poster_url = this.baseImgURL + temp.poster_path;
  this.movieService.insertIntoToWatchList(this.temp);
}



removeFromToWatch(key:string){
  console.log(this.toWatchDb.items);
  console.log(key);
  console.log(this.toWatchDb.items);
  this.movieService.deleteFromToWatch(key);

}

moveToWatched(temp: any){
  console.log(temp);
  this.temp.title = temp.title;
  this.temp.poster_url = temp.poster_url;
  this.movieService.insertMovie(this.temp);
  this.clearCurrent(); 
  
}
setSelectedMovie(url:string){
  this.selectedMovieURL = url;
}
clearCurrent(){
  this.selectedMovieURL = "";
}
}
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: '../search-screen/search-screen.component.html',
  styleUrls: ['../search-screen/search-screen.component.css']
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data:any) {}
   baseImgURL = 'https://image.tmdb.org/t/p/w500/';

  onNoClick(): void {
    console.log(this.data);
    // this.dialogRef.close();
  }

}
