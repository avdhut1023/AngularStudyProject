import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appCustomBlank]',
  providers: [{provide: NG_VALIDATORS, useExisting: CustomBlankDirective, multi: true}]
})
export class CustomBlankDirective implements Validator{

  validate(control: AbstractControl): {[key: string]: any} | null {
    console.log(control.value.length);
    console.log(control.value);

    if (control.value !== undefined  && control.value.length <= 0) {
      console.log(2);
        return { 'blankVal': true};

  }
  console.log(3);
  return { 'blankVal': false};
}
  registerOnValidatorChange?(fn: () => void): void {
  }

  constructor() { }

}
