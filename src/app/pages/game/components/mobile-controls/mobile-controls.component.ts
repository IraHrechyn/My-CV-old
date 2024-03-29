import { Component } from '@angular/core';
import {InputService} from "../../services/input.service";

@Component({
  selector: 'app-mobile-controls',
  templateUrl: './mobile-controls.component.html',
  styleUrls: ['./mobile-controls.component.css']
})
export class MobileControlsComponent {

  constructor(private input:InputService) {
  }
  dPadMovement(direction: string): void {
    this.input.setDirection(direction);
  }
}
