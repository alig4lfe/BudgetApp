
import { Component, } from '@angular/core';
import { movieDataBase } from './moviesDB';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { searchResponse } from './search-response';
import { MovieService } from './movies/shared/movie.service';
import { Movie } from './movies/shared/movie.model';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { Http, Response } from '@angular/http';
import { pipe, Observable } from 'rxjs';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MovieService]
})
export class AppComponent {
  


}
