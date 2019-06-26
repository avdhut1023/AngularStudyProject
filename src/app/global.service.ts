import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {

  isLoggedIn: boolean;
  constructor() { }

  globalMethod(){
    alert('inside global method');
  }

  public setIsLoggedIn(isLoggedIn: boolean){
    this.isLoggedIn = isLoggedIn;
  }

  public getIsLoggedIn(): boolean {
    return this.isLoggedIn;
  }

}



