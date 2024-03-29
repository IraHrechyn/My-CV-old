import {Component} from '@angular/core';
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent{
  constructor(public state:DataService){}

  closeModal() {
    this.state.selectedMovie = null;
    this.state.modal = false;
  }

    protected readonly Math = Math;
}
