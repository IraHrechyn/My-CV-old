import { Component } from '@angular/core';
import {DataService} from "./services/data.service";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
constructor(public state: DataService){}
}
