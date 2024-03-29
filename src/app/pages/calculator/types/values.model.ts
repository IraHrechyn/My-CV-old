export class ValuesModel {
  private _firstNumber = '0';
  private _secondNumber = '';
  private _operator = '';
  private _errors = false;
  private _isPercentage = false;

  get firstNumber() {
    return this._firstNumber;
  }
  set firstNumber(firstNumber) {
    this._firstNumber = firstNumber;
  }

  get secondNumber() {
    return this._secondNumber;
  }

  set secondNumber(secondNumber) {
    this._secondNumber = secondNumber;
  }
  get operator() {
    return this._operator;
  }

  set operator(operator) {
    this._operator = operator;
  }

  get errors() {
    return this._errors;
  }

  set errors(value) {
    this._errors = value;
  }

  get isPercentage() {
    return this._isPercentage;
  }

  set isPercentage(value) {
    this._isPercentage = value;
  }
  get displayValue() {
    if(this._errors) return "На нуль ділити не можна!";
    return this._firstNumber + ' ' + this._operator + ' ' + this._secondNumber;
  }

  get currentValue() {
    return this._operator ? this._secondNumber : this._firstNumber;
  }

  set currentValue(value) {
    if (this._operator) this._secondNumber = value;
    else this._firstNumber = value;
  }

  clearAll(): void {
    Object.assign(this, new ValuesModel());
  }
}
