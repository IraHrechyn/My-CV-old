import { Component } from '@angular/core';
import {DataService} from "../../services/data.service";
import {AppApiService} from "../../services/app-api.service";
import {CardData} from "../../types/card-data.interface";

@Component({
  selector: 'app-header-movie',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  name: string = '';
  year: string = '';
  movies:CardData[] = [];

  constructor(private state: DataService, private apiService:AppApiService) {}

  async onSearch() {
    this.state.filter.page = 1;
    this.state.pagination.pageCurrent = 1;
    this.state.filter.name = this.name;
    this.state.filter.year = this.year;

    try {
      this.movies = await this.apiService.fetchMovies();
    } catch (error) {
      console.error('Error occurred during search:', error);
    }
  }
}
