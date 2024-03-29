import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppFiltersModal {
  private _year = '';
  private _name = '';
  private _page = 1;
  private _defaultQuery = '?api_key=5874acfd11651a28c55771624f7021f4&language=en-US';

  set year(value: string) {
    this._year = value;
  }

  set name(value: string) {
    this._name = value;
  }

  get name() {
    return this._name;
  }

  set page(value: number) {
    this._page = value;
  }

  get page() {
    return this._page;
  }

  get defaultQuery() {
    return this._defaultQuery;
  }


  toQuery(): string {

    let query = `&page=${this.page}`;

    if (this._name) query += `&query=${this._name || ''}`;

    if (this._year) {
      query += this._name
        ? `&year=${this._year}`
        : `&primary_release_date.lte=${this._year}-12-31&primary_release_date.gte=${this._year}-01-01`;
    }

    return this.defaultQuery + query;
  }

}
