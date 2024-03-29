import { Pipe, PipeTransform } from '@angular/core';
import { ButtonTypeEnum } from '../types/button-type.enum';
import { NumericsEnum } from '../types/numerics.enum';
import {ActionsEnum} from "../types/actions.enum";
import {OperationsEnum} from "../types/operators.enum";

const handler = (acc: Record<string, boolean>, curr: string) => {
  acc[curr] = true;
  return acc;
}

const valuesByButtonType = {
  [ButtonTypeEnum.action]: Object.values(ActionsEnum).reduce(handler, {}),
  [ButtonTypeEnum.numeric]: Object.values(NumericsEnum).reduce(handler, {}),
  [ButtonTypeEnum.operation]: Object.values(OperationsEnum).reduce(handler, {}),
}

@Pipe({ name: 'buttonOfType' })
export class ButtonOfTypePipe implements PipeTransform {
  transform(label: any, buttonType: string): boolean {
    switch (buttonType) {
      case ButtonTypeEnum.action:
        return valuesByButtonType[ButtonTypeEnum.action][label] || false;
      case ButtonTypeEnum.numeric:
        return valuesByButtonType[ButtonTypeEnum.numeric][label] || false;
      case ButtonTypeEnum.operation:
        return valuesByButtonType[ButtonTypeEnum.operation][label] || false;
      default:
        return false;
    }
  }
}
