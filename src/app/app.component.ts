import { Component } from '@angular/core';

import { of } from 'rxjs/observable/of';
import { from } from 'rxjs/observable/from';
import { interval } from 'rxjs/observable/interval';
import { map, filter } from 'rxjs/operators';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test';
  show: boolean;
  myarr = ['t1', 't2', 't3', 't4'];
  constructor() {
    this.show = false;

    
}


  public testM() {
    alert('Inside methood success!!!');
  }
}
