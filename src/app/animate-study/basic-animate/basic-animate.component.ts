import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-basic-animate',
  templateUrl: './basic-animate.component.html',
  styleUrls: ['./basic-animate.component.css'],
  animations: [
    trigger('openClose', [
    state('open', style({
        height: '200px',
        opacity: 0.6,
        backgroundColor: 'yellow'
    })),
      state('closed', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
       state('inProgress', style({
        height: '100px',
        opacity: 1,
        backgroundColor: 'orange'
      })),
       /* transition('open => closed', [
        animate('0.5s')
      ]), */
      /* transition('closed => open', [
        animate('2s ease-out')
      ]), */
      transition('* => open', [
        animate('2s')
      ]),
      transition('closed => void', [
        animate('2s')
      ])

    ]),
  ]
})
export class BasicAnimateComponent implements OnInit {

  isOpen = true;
  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
