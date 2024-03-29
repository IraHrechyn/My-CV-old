import {OperationsEnum} from "../types/operators.enum";
import {DataService} from "./data.service";
import {ActionsEnum} from "../types/actions.enum";
import {Injectable} from "@angular/core";

@Injectable({ providedIn: 'root' })
export class CalculateService {
  constructor(private state: DataService) {}

  calculate() {
    if (this.state.values.operator === OperationsEnum.Divide && parseFloat(this.state.values.secondNumber) === 0) {
      this.state.values.clearAll();
      this.state.values.errors = true;
      return;
    }

    if (this.state.values.isPercentage && this.state.values.secondNumber === "") return;

    if (this.state.values.secondNumber !== "") {
      const calculatedValue = this.getCalculatedValue();
      this.state.values.clearAll();
      this.state.values.firstNumber = calculatedValue.toString();
    }
  }
  private getCalculatedValue() {
    let first = parseFloat(this.state.values.firstNumber);
    let second = parseFloat(this.state.values.secondNumber);
    switch (this.state.values.operator) {
      case OperationsEnum.Plus:
        return first + second;
      case OperationsEnum.Minus:
        return first - second;
      case OperationsEnum.Multiply:
        return first * second;
      case OperationsEnum.Divide:
        return first / second;
      case ActionsEnum.Percent:
        return first * second;
      default:
        throw new Error(`Unknown operator "${this.state.values.operator}"`);
    }
  }
}
