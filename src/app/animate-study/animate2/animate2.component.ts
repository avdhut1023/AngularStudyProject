import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-animate2',
  templateUrl: './animate2.component.html',
  styleUrls: ['./animate2.component.css'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [ // each time the binding value changes
        query(':leave', [
          stagger(100, [
            animate('0.5s', style({ opacity: 0 }))
          ])
        ], { optional: true }),
        query(':enter', [
          style({ opacity: 0 }),
          stagger(100, [
            animate('0.5s', style({ opacity: 1 }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class Animate2Component implements OnInit {
  items = [];
  constructor() { }

  ngOnInit() {
  }

  


  logAnimation(_event) {
    console.log(_event)
  }
  showItems() {
    [0, 1, 2, 3, 4, 6, 7, 8, 9, 10].map((i) => {
      this.items.push("User Number - " + i)
    })

  }

  hideItems() {
    this.items = [];
  }

  toggle() {
    this.items.length ? this.hideItems() : this.showItems();
  }

}
