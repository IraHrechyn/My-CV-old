import { Component, OnInit } from '@angular/core';
import {ClockService} from "../../services/clock.service";

@Component({
  selector: 'app-analog-clock',
  templateUrl: './analog-clock.component.html',
  styleUrls: ['./analog-clock.component.css']
})
export class AnalogClockComponent{
  constructor(public dateService: ClockService) {}
}
