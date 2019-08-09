import { Directive, 
  OnInit, 
  Renderer2, 
  ElementRef, 
  HostListener,
  Input,
  HostBinding, 
  } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective implements OnInit {

  @Input('appCustomDirective') defaultColor : string ;
  @Input() highlightColor : string ;
  @HostBinding('style.backgroundColor') backgroundColor: string;

 constructor(private elementRef: ElementRef ,private renderer : Renderer2){

 }

 ngOnInit(){
   this.backgroundColor = this.defaultColor;
 }
 @HostListener('mouseenter') mouseover(eventData: Event){
   //this.renderer.setStyle(this.elementRef.nativeElement,'background-color','pink');
   this.backgroundColor =this.highlightColor;
 }

 @HostListener('mouseleave') mouseleave(eventData: Event){
   //this.renderer.setStyle(this.elementRef.nativeElement,'background-color','transparent');
   this.backgroundColor = this.defaultColor;
 }}











































