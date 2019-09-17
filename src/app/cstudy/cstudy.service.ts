import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class CstudyService {

  emailTest: string;
  public emailSubject: Subject<string> = new Subject<string>();
  constructor() { }

  public serviceMethod(){
   // alert('inside service method');
  }

  setEmail(email: string){
    this.emailTest = email;

  }

  getEmail() {
    return this.emailTest;
  }
}


