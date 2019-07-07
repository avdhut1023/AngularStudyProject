import { Directive } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, ValidatorFn, Validator, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appAgeLimitValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: AgeLimitValidatorDirective, multi: true}]

})
export class AgeLimitValidatorDirective implements Validator  {

  minAge: number = 4;
  maxAge: number  = 16;
  validate(control: AbstractControl): {[key: string]: any} | null {
    if (control.value !== undefined && (isNaN(control.value) || control.value < this.minAge || control.value > this.maxAge)) {
      return { 'ageRange': true };
  }

    return null;
  }

  registerOnValidatorChange?(fn: () => void): void {
      console.log('resistered');
  }

  constructor() { }

  ageRangeValidatorWithRange(min: number, max: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
        if (control.value !== undefined && (isNaN(control.value) || control.value < min || control.value > max)) {
            return { 'ageRange': true };
        }
        return null;
    };

}
