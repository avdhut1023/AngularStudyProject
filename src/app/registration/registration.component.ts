import { Component, OnInit, ViewChildren } from '@angular/core';
import { NgForm, FormControl, FormGroup, Validators } from '@angular/forms';

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
  myFormGr: FormGroup;
  constructor() { }

  ngOnInit() {
    this.myFormGr = new FormGroup({
      firstname:  new FormControl('', [Validators.required, Validators.minLength(6)]),
      lastname:  new FormControl(''),
      myemail:  new FormControl(''),
      mypassword: new FormControl('')
    });
  }

  onSubmit() {
    /* if (!this.myForm.valid) {
      alert('Form invalid');
      return false;
    }
     alert('Success '); */

      console.log(this.myFormGr.value);
  }

}
