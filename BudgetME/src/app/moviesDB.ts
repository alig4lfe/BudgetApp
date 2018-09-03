import { movie } from './Mmovie'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';


@Injectable()
export class movieDataBase{
    items: any[];
}
@Injectable()
export class toWatchDataBase{
    items: any[];
}
