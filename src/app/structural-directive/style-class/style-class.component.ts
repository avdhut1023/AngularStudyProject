import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { HighlightService } from '../../highlight.service';

@Component({
  selector: 'app-style-class',
  templateUrl: './style-class.component.html',
  styleUrls: ['./style-class.component.css']
})
export class StyleClassComponent implements OnInit, AfterViewChecked {
  
  highlight: boolean = false;
  styleCondition: boolean = false;
  constructor(private highlightService: HighlightService) { }

  ngOnInit() {
  }

  ngAfterViewChecked(): void {
   if(!this.highlight){
      this.highlightService.highlightAll();
      this.highlight = true;
   }
  }

  public getColor(){
      return 'brown';
  }
}
