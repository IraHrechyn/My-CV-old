import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppPagination{
  private _pageCurrent = 1;
  private _totalPages = 0 ;
  private _id = 0;

  get pageCurrent() {
    return this._pageCurrent;
  }

  set pageCurrent(value: number) {
    this._pageCurrent = value;
  }

  get totalPages() {
    return this._totalPages;
  }

  set totalPages(value: number) {
    this._totalPages = value;
  }

  get id() {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }
}
