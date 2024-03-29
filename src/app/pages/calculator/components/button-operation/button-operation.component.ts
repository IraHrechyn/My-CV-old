import { Component, Input } from '@angular/core';
import { DataService } from "../../services/data.service";
import {CalculateService} from "../../services/calculate.service";

@Component({
  selector: 'app-button-operation',
  templateUrl: '../../templates/button.component.html',
  styleUrls: ['./button-operation.component.css']
})
export class ButtonOperationComponent {
  @Input() label!: string;

  constructor(private state: DataService, private calculateService: CalculateService) {}

  handleButtonClick() {
    if (this.state.values.secondNumber !== "") this.calculateService.calculate();
    this.state.values.operator = this.label;
  }
}
