import { Component, OnInit, ViewEncapsulation, OnChanges, SimpleChanges, Input,
   OnDestroy, Output, EventEmitter } from '@angular/core';
import { CstudyService } from '../cstudy.service';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
  
})
export class ChildComponent implements OnInit, OnChanges, OnDestroy {

  @Output() childEvent = new EventEmitter();

  @Input('changeVal') changeVal: string;

  email: string;

  ngOnDestroy(): void {
    console.log('Child says Good Bye!!');
  }


  constructor(private cstudyService: CstudyService) { }

  ngOnInit() {
  }



  ngOnChanges(changes: SimpleChanges) {
    console.log('CStudy Component: OnChanges');
    // tslint:disable-next-line:forin
    for (let propName in changes) {
      let chng = changes[propName];
      let cur  = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      console.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    } 
  }

  sendEmail(){
    this.childEvent.emit(this.email);
    this.cstudyService.setEmail(this.email);
  }

}
