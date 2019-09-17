import { Component, OnInit } from '@angular/core';
import { CstudyService } from '../cstudy.service';

@Component({
  selector: 'app-service-subject1',
  templateUrl: './service-subject1.component.html',
  styleUrls: ['./service-subject1.component.css']
})
export class ServiceSubject1Component implements OnInit {

  email: string;
  constructor(private cService: CstudyService) { }

  ngOnInit() {
  }

  public  sendEmail(){
    
  }

}
