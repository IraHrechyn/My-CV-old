import { Component} from '@angular/core';
import {ClockService} from "../../services/clock.service";

@Component({
  selector: 'app-digital-clock',
  templateUrl: './digital-clock.component.html',
  styleUrls: ['./digital-clock.component.css']
})
export class DigitalClockComponent {

  constructor(public dateService: ClockService) {}


  public formatTime(time: number): string {
    return time < 10 ? '0' + time : time.toString();
  }
}
