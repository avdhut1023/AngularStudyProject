import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view-caps-child',
  templateUrl: './view-caps-child.component.html',
  styleUrls: ['./view-caps-child.component.css']
})
export class ViewCapsChildComponent implements OnInit {

  @Input() showCard: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
