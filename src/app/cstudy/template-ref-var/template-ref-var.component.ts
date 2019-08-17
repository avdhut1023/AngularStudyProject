import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-template-ref-var',
  templateUrl: './template-ref-var.component.html',
  styleUrls: ['./template-ref-var.component.css']
})
export class TemplateRefVarComponent implements OnInit {

  @ViewChild('divText') dText: ElementRef;
  @ViewChild('sText') sText: ElementRef;
  constructor() { }

  ngOnInit() {
  }

  editViewChild(){

    this.dText.nativeElement.innerHTML = this.sText.nativeElement.value;
    this.dText.nativeElement.style.color = 'tomato';
    this.dText.nativeElement.style.fontSize = '20px';
  }

  showText(stext: any){
    alert(stext);
  }

}
