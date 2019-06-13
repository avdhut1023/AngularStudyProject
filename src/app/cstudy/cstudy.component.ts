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
  SimpleChanges,
  ViewChild,
  ElementRef} from '@angular/core';
import { CstudyService } from './cstudy.service';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-cstudy',
  templateUrl: './cstudy.component.html',
  styleUrls: ['./cstudy.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  //interpolation: ['((', '))'],
  providers: [CstudyService]
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

  @ViewChild('divText') dText: ElementRef;
  @ViewChild('sText') sText: ElementRef;
  testVal: string = 'Sample Value';
  displayChild: boolean = true;
  emittedEmail: string;
  constructor(private cstudyService: CstudyService, private globalService: GlobalService) { 
    console.log('CStudy Component: Constructor');
  }

  getEmail(event){
    this.emittedEmail = event;
  }

  triggerService(){
    this.cstudyService.serviceMethod();
    this.globalService.globalMethod();
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

  showText(stext: any){
    alert(stext);
  }

  editViewChild(){

    this.dText.nativeElement.innerHTML = this.sText.nativeElement.value;
    this.dText.nativeElement.style.color = 'tomato';
    this.dText.nativeElement.style.fontSize = '20px';
  }

  
}
