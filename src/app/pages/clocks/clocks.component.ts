import {Component, OnInit} from '@angular/core';
import {ClockService} from "./services/clock.service";

@Component({
  selector: 'app-clocks',
  templateUrl: './clocks.component.html',
  styleUrls: ['./clocks.component.css'],
})
export class ClocksComponent implements OnInit{
  constructor(public dateService: ClockService) {}

  ngOnInit() {
    this.dateService.startClock();
  }

}
