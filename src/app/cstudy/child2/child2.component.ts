import { Component, OnInit } from '@angular/core';
import { CstudyService } from '../cstudy.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  email: string;
  emailSub: Subscription;
  constructor(private cstudyService: CstudyService) { }

  ngOnInit() {
    this.emailSub = this.cstudyService.emailSubject
    .subscribe((data) => {
      this.email = data;
    }
    );
  }

  getEmailFromService(){
    this.email = this.cstudyService.getEmail();
  }

}
