import { NumericsEnum } from './numerics.enum';
import {ActionsEnum} from "./actions.enum";
import {OperationsEnum} from "./operators.enum";

export class ButtonsModel {
  get correctOrder() {
    return [
      ActionsEnum.Clear,
      ActionsEnum.Negative,
      ActionsEnum.Percent,
      OperationsEnum.Divide,
      NumericsEnum.Seven,
      NumericsEnum.Eight,
      NumericsEnum.Nine,
      OperationsEnum.Multiply,
      NumericsEnum.Four,
      NumericsEnum.Five,
      NumericsEnum.Six,
      OperationsEnum.Minus,
      NumericsEnum.One,
      NumericsEnum.Two,
      NumericsEnum.Three,
      OperationsEnum.Plus,
      NumericsEnum.Zero,
      NumericsEnum.Dot,
      ActionsEnum.Equal
    ];
  }
}
