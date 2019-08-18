import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { HighlightService } from '../../highlight.service';

@Component({
  selector: 'app-template-ref-var',
  templateUrl: './template-ref-var.component.html',
  styleUrls: ['./template-ref-var.component.css']
})
export class TemplateRefVarComponent implements OnInit, AfterViewChecked {

  @ViewChild('divText') dText: ElementRef;
  @ViewChild('sText') sText: ElementRef;
  highlighted: boolean = false;

  constructor(private highlightService: HighlightService) { }

  ngOnInit() {
  }

  editViewChild(){

    this.dText.nativeElement.innerHTML = this.sText.nativeElement.value;
    this.dText.nativeElement.style.color = 'tomato';
    this.dText.nativeElement.style.fontSize = '50px';
  }

  showText(stext: any){
    alert(stext);
  }

  ngAfterViewChecked() {
    if (!this.highlighted) {
      this.highlightService.highlightAll();
      this.highlighted = true;
    }
}
}