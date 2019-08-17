import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-view-encaps',
  templateUrl: './view-encaps.component.html',
  styleUrls: ['./view-encaps.component.css'],
  // encapsulation: ViewEncapsulation.None
   encapsulation: ViewEncapsulation.Emulated
  //encapsulation: ViewEncapsulation.Native
})
export class ViewEncapsComponent implements OnInit {

  @Input() showCard: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
