import { Directive } from '@angular/core';

@Directive({
  selector: '[calculator-button]' // Attribute selector
})
export class CalculatorButtonDirective {

  constructor() {
    console.log('Hello CalculatorButtonDirective Directive');
  }

}
