import { Directive, OnInit, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appCustom2]'
})
export class Custom2Directive implements OnInit {
  
  @Input('appCustom2') dirColor: string;

  @HostBinding('style.backgroundColor') backgroundColor: string;
  constructor() { }

  ngOnInit(): void {
    //this.backgroundColor = 'blue'; 
    this.backgroundColor = this.dirColor;
  }

  @HostListener('mouseenter')
  public mouseEnter(eventData: Event){
      this.backgroundColor = 'green';
  }

  @HostListener('mouseleave')
  public mouseOut(eventData: Event){
      this.backgroundColor = this.dirColor;
  }
}
