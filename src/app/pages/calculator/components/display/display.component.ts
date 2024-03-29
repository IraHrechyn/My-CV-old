import { Component } from '@angular/core';
import { DataService } from "../../services/data.service";

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {
  constructor(public state: DataService) {}
}
