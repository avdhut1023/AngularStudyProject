import { Component, OnInit, ViewChildren } from '@angular/core';
import { NgForm, FormControl, FormGroup, Validators, FormBuilder, AbstractControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  @ViewChildren('myForm') myForm: NgForm;

  
 /*  firstname: FormControl = new FormControl('');
  lastname: FormControl = new FormControl('');
 */
  minAge: number = 0;
  maxAge: number = 5;
  myFormGr: FormGroup;
  email2: string;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    /*this.myFormGr = new FormGroup({
      firstname:  new FormControl('', [Validators.required, Validators.minLength(6)]),
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
    });*/

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

  onSubmit(myForm: NgForm) {
     if (!myForm.valid) {
      alert('Form invalid');
      return false;
    }
     alert('Success ');
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
