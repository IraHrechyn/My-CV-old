import {Component, Input} from '@angular/core';
import {ActionsEnum} from "../../types/actions.enum";
import {DataService} from "../../services/data.service";
import {CalculateService} from "../../services/calculate.service";

@Component({
  selector: 'app-button-action',
  templateUrl: '../../templates/button.component.html',
  styleUrls: ['./button-action.component.css']
})

export class ButtonActionComponent {
  @Input() label!: string;
  constructor(private state: DataService, private calculateService: CalculateService ) {}


  handleButtonClick() {
    switch (this.label) {
      case  ActionsEnum.Equal:
        this.calculateService.calculate();
        break;
      case ActionsEnum.Negative:
        this.changeOfSign();
        break;
      case ActionsEnum.Clear:
        this.state.values.clearAll();
        break;
      case ActionsEnum.Percent:
        this.percentage();
        break;
    }
  }

  changeOfSign() {
    const currentNumber = parseFloat(this.state.values.currentValue);
    if (!isNaN(currentNumber)) this.state.values.currentValue = (currentNumber * -1).toString();
  }

  percentage() {
    if (!isNaN(+this.state.values.currentValue)) {
      const newValue = (+this.state.values.currentValue / 100).toString();
      this.state.values.isPercentage = true;
      this.state.values.currentValue = newValue;
    }
  }
}
