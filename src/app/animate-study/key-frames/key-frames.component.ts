import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition, keyframes } from '@angular/animations';

@Component({
  selector: 'app-key-frames',
  templateUrl: './key-frames.component.html',
  styleUrls: ['./key-frames.component.css'],
  animations: [
    trigger('keyframes',[
      transition(':enter', [       
        animate('6s', keyframes([ 
          style({transform: 'translateX(0%)'}), 
          style({transform: 'translateX(500%)', backgroundColor: "red"}), 
          style({transform: 'translate(500%, 100%)', backgroundColor: "green"}), 
          style({transform: 'translateY(100%)', backgroundColor: "tomato"}), 
          style({transform: 'translateX(0%)', backgroundColor: "gold"}) 
        ])),
      ])      
    ])
  ]
})
export class KeyFramesComponent implements OnInit {

  show  = true;
  constructor() { }

  ngOnInit() {
    setInterval(()=> {
      this.show = !this.show;
      setTimeout(()=> {
        this.show = !this.show;
      } ,1);
    } ,3000);
  }

}
