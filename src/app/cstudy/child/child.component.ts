import { Component, OnInit, ViewEncapsulation, OnChanges, SimpleChanges, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
  
})
export class ChildComponent implements OnInit, OnChanges, OnDestroy {
  ngOnDestroy(): void {
    console.log('Child says Good Bye!!');
  }

  @Input('changeVal') changeVal: string;
  constructor() { }

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

}
