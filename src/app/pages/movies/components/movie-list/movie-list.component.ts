import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data.service";
import {AppApiService} from "../../services/app-api.service";

@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class FilmsComponent implements OnInit{

  constructor(public state: DataService, private apiService: AppApiService){
  }

  async ngOnInit() {
    await this.loadMoviesData();
  }

  async loadMoviesData(): Promise<void> {
    try {
      this.state.movieData = await this.apiService.fetchMovies();
    } catch (error) {
      console.error('Error loading carousel data:', error);
    }
  }

  onFilmClick(movie: any) {
    this.state.selectedMovie = movie;
    this.state.modal = true;
  }
}
