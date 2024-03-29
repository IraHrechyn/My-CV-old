import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';
import {CardData} from "../types/card-data.interface";
import {AppFiltersModal} from "../types/app-filters.modal";

@Injectable({
  providedIn: 'root',
})
export class AppApiService {
  private apiUrl = 'https://api.themoviedb.org/3/discover/movie';
  private carouselApiUrl = 'https://api.themoviedb.org/3/movie/now_playing';

  constructor(private http: HttpClient, private state: DataService, private filter: AppFiltersModal) {}

  private get fetchUrl() {
    return this.state.filter.name
      ? this.apiUrl.replace('discover', 'search')
      : this.apiUrl;
  }

  async fetchMovies(): Promise<CardData[]> {
    const url = this.fetchUrl + this.state.filter.toQuery();
    try {
      const response: any = await fetch(url);

      if (response.ok) {
        const json = await response.json();
        this.state.pagination.totalPages = json.total_pages;

          this.state.movieData = json.results.map((result: any): CardData => ({
            genreIds: result.genre_ids,
            id: result.id,
            originalLanguage: result.original_language,
            originalTitle: result.original_title,
            overview: result.overview,
            popularity: result.popularity,
            posterPath: result.poster_path,
            releaseDate: result.release_date,
            title: result.title,
            voteAverage: result.vote_average,
            voteCount: result.vote_count,
          }));

          return this.state.movieData;
      } else {
        throw new Error('Network response was not ok.');
      }
    } catch (error) {
      console.error('Error fetching movie-list:', error);
      return [];
    }
  }

  async loadCarousel() {
    const url = await fetch(this.carouselApiUrl + this.state.filter.toQuery());
    const response = await url.json();
    if (response && response.results) {
    return response.results.map((data: any) => ({
        posterPath: data.poster_path,
        title: data.original_title,
        id: data.id
      }));
    }
  }
}
