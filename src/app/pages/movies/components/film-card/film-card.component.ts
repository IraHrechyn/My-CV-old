import { Component, Input, Output, EventEmitter } from '@angular/core';
import {CardData} from "../../types/card-data.interface";

@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.css']
})
export class FilmCardComponent {
  @Input() movie!: CardData;
  @Output() filmClicked: EventEmitter<any> = new EventEmitter();

  onFilmClick() {
    this.filmClicked.emit(this.movie);
  }
}
