import { Injectable } from '@angular/core';
import { ButtonsModel } from "../types/buttons.model";
import { ValuesModel } from "../types/values.model";

@Injectable({ providedIn: 'root' })
export class DataService {
  buttons: ButtonsModel;
  values: ValuesModel;

  constructor() {
    this.buttons = new ButtonsModel();
    this.values = new ValuesModel();
  }
}
