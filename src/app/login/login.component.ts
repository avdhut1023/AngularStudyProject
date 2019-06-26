import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  constructor(public globalService: GlobalService, private router: Router) { }

  ngOnInit() {
  }

  public confirmLogin(){
    if(this.username === 'admin' && this.password === 'password'){
      this.globalService.setIsLoggedIn(true);
      this.router.navigate(['post/postdetail', 1]);
    } else {
      this.globalService.setIsLoggedIn(false);
    }
  }

  public getLoginInfo(){
    return this.globalService.getIsLoggedIn();
  }
}
//