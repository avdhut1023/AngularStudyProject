import { Component,  ViewEncapsulation,
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy, 
  SimpleChange,
  SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-cstudy',
  templateUrl: './cstudy.component.html',
  styleUrls: ['./cstudy.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  interpolation: ['((', '))']
})
export class CstudyComponent implements
OnChanges,
OnInit,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {

  testVal: string = 'Sample Value';
  displayChild: boolean = true;

  constructor() { 
    console.log('CStudy Component: Constructor');
  }

  toggle() {
    this.displayChild = !this.displayChild;
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('CStudy Component: OnChanges');
  }

  ngOnInit() {
    console.log('CStudy Component: OnInit');
  }

  ngDoCheck() {
    console.log('CStudy Component: DoCheck');
  }

  ngAfterContentInit() {
    console.log('CStudy Component: AfterContentInit');
  }

  ngAfterContentChecked() {
  console.log('CStudy Component:AfterContentChecked');
  }

  ngAfterViewInit() {
  console.log('CStudy Component:AfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('CStudy Component:AfterViewChecked');
  }

  ngOnDestroy() {
    console.log('CStudy Component:OnDestroy');
  }

}
