import { Directive, HostBinding } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, ValidatorFn, Validator, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appAgeLimitValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: AgeLimitValidatorDirective, multi: true}]

})
export class AgeLimitValidatorDirective implements Validator  {

  @HostBinding('class') eleClass: string = 'form-control';
  minAge: number = 4;
  maxAge: number  = 16;

  validate(control: AbstractControl): {[key: string]: any} | null {

      if (control.value !== undefined && (isNaN(control.value) || control.value < this.minAge || control.value > this.maxAge)) {
        this.eleClass = this.eleClass + ' is-invalid';
        return { 'ageRange': true };
    }
    
    this.eleClass = 'form-control';
    return null;
  }


  constructor() { }


}
