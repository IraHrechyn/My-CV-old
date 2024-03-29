import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { AppApiService } from '../../services/app-api.service';


@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit {
  pagination;

  constructor(
    public state: DataService,
    private apiService: AppApiService
  ) {
    this.pagination = this.state.pagination;
  }

  async ngOnInit() {
    await this.fetchMoviesAndUpdate();
  }

  async onPageClick(page: number) {
    if (page === this.pagination.pageCurrent) return;

    if (page === -1) this.pagination.pageCurrent = this.pagination.pageCurrent > 1 ? this.pagination.pageCurrent - 1 : 1;
    else if (page === -2) this.pagination.pageCurrent = this.pagination.pageCurrent < this.pagination.totalPages ? this.pagination.pageCurrent + 1 : this.pagination.totalPages;
    else this.pagination.pageCurrent = page;

    this.state.filter.page = this.pagination.pageCurrent;
    await this.fetchMoviesAndUpdate();
  }

  async fetchMoviesAndUpdate() {
    try {
      await this.apiService.fetchMovies();
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  }

  getPageNumbers(): number[] {
    let countStart: number | null = null;

    if (this.pagination.pageCurrent === 1 || this.pagination.pageCurrent === 2) countStart = 1;
    if (this.pagination.pageCurrent > 2) countStart = this.pagination.pageCurrent - 2;
    if (this.pagination.totalPages > 5) {
      if (this.pagination.pageCurrent === this.pagination.totalPages - 1) countStart = this.pagination.pageCurrent - 3;
      if (this.pagination.pageCurrent === this.pagination.totalPages) countStart = this.pagination.pageCurrent - 4;
    }

    return new Array(this.pagination.totalPages > 5 ? 5 : this.pagination.totalPages)
      .fill(null)
      .map((_, i) => i + (countStart ?? 0));
  }
}
