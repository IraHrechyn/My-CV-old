import {Component, Input} from '@angular/core';
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-button-numeric',
  templateUrl: '../../templates/button.component.html',
  styleUrls: ['./button-numeric.component.css']
})
export class ButtonNumericComponent {
  @Input() label!: string;

   constructor(private state: DataService, ) {}

  handleButtonClick() {
    if ((this.label === "." && this.state.values.currentValue.includes(".")) || this.state.values.currentValue.length > 18) return;
    this.state.values.currentValue = this.state.values.currentValue === '0' ? this.label : this.state.values.currentValue + this.label;

    if (this.state.values.currentValue === ".") this.state.values.currentValue = "0.";
  }
}
