import { Component } from '@angular/core';
import {DataService} from "./services/data.service";
import { ButtonTypeEnum } from './types/button-type.enum';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent {
  readonly ButtonTypeEnum = ButtonTypeEnum;

  constructor(public state: DataService) {}
}
