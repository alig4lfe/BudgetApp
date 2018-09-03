import { Component, OnInit } from '@angular/core';
import { MovieService } from '../shared/movie.service';
import { Movie } from '../shared/movie.model'

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movieList: Movie[];
  constructor(private movieService: MovieService) { }

  ngOnInit() {
      // var x = this.movieService.getBasicData();
      // x.snapshotChanges().subscribe(item => {
      //   this.movieList = [];
      //   item.forEach(element => {
      //     var y = element.payload.toJSON();
      //     y["$key"] = element.key;
      //     this.movieList.push(y as Movie);
      //   });
      // });
      // return (this.movieList);
    }

    data() {
    //   var x = this.movieService.getBasicData();
    //   x.snapshotChanges().subscribe(item => {
    //     this.movieList = [];
    //     item.forEach(element => {
    //       var y = element.payload.toJSON();
    //       y["$key"] = element.key;
    //       this.movieList.push(y as Movie);
    //     });
    //   });
    //   return (this.movieList);
    // }
  }
}

