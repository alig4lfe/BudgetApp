import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList  } from 'angularfire2/database'
import { Movie} from './movie.model';
import { Observable } from 'rxjs/internal/Observable';
import { movieDataBase, toWatchDataBase } from '../../moviesDB';

@Injectable(
  // providedIn: 'root'
)
export class MovieService {
  movieList:AngularFireList<any>;
  toWatchList:AngularFireList<any>;
  selectedMovie: Movie = new Movie();
  watched: Movie[];
  moviesList: Movie[];

  constructor(public firebase:AngularFireDatabase, public moviesDb:movieDataBase,public toWatchDb:toWatchDataBase) {
    this.movieList = this.firebase.list('/movies');
    this.toWatchList = this.firebase.list('/toWatch');
  }
  
// points to Watched List from Firebase Db
  getWatchedData(){
    
    this.movieList.snapshotChanges().subscribe(item => {
      this.watched = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.watched.push(y as Movie);
        }); 
      this.moviesDb.items = this.watched;
      });
  }
  // Adds movie to watched List
  insertMovie(movie: Movie){
    this.movieList.push({
      title: movie.title,
      poster_url: movie.poster_url,
      rating: "",
      review: ""
    });
  
  }
  // removes movie from watched List
  deleteMovie(key:string){
     this.movieList.remove(key);
  }





// points toWatchList to toWatch Database
  getToWatchData(){
    this.toWatchList.snapshotChanges().subscribe(item => {
    this.moviesList = [];
    item.forEach(element => {
      var y = element.payload.toJSON();
      y["$key"] = element.key;
      this.moviesList.push(y as Movie);
      }); 
    this.toWatchDb.items = this.moviesList;
    });
  }


  insertIntoToWatchList(movie: Movie){
    this.toWatchList.push({
      title: movie.title,
      poster_url: movie.poster_url,
      rating: "",
      review: ""
    });
  }
  
  deleteFromToWatch(key:string){
    this.toWatchList.remove(key);
 }
  


 
 

}
