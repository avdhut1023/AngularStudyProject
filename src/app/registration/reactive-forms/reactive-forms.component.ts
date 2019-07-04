import { Component, OnInit } from '@angular/core';
import { Validators, AbstractControl, ValidatorFn, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  myFormGr: FormGroup;
  firstname: FormControl = new FormControl('pp');
  lastname: FormControl = new FormControl('');
  minAge: number = 0;
  maxAge: number = 5;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
/*
this.myFormGr = new FormGroup({
      firstname:  new FormControl('Pss', [Validators.required, Validators.minLength(6)]),
      lastname:  new FormControl(''),
      myemail:  new FormControl('', Validators.email),
      myage: new FormControl('', [this.ageRangeValidatorWithRange(this.minAge, this.maxAge)]),
      mobileNumber: new FormControl('', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]),
      address: new FormGroup({
        street: new FormControl(''),
        city: new FormControl(''),
        state: new FormControl(''),
        zip: new FormControl('')
      }),
      mypassword: new FormControl('')
    });
*/
     this.myFormGr = this.fb.group({
      firstname:  ['', [Validators.required, Validators.minLength(6)]],
      lastname:  [''],
      myemail:  [''],
      myage: ['', [this.ageRangeValidator]],
      mobileNumber: ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
      address: this.fb.group({
        street: ['', Validators.required],
        city: [''],
        state: [''],
        zip: ['']
      }),
      mypassword: []
    });
 
  }

  ageRangeValidator(control: AbstractControl): { [key: string]: boolean } | null {
    if (control.value !== undefined && (isNaN(control.value) || control.value < 18 || control.value > 60)) {
        return { 'ageRange': true };
    }
    return null;
  }


 ageRangeValidatorWithRange(min: number, max: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
      if (control.value !== undefined && (isNaN(control.value) || control.value < min || control.value > max)) {
          return { 'ageRange': true };
      }
      return null;
  };
}

}
