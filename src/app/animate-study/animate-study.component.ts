import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animate-study',
  templateUrl: './animate-study.component.html',
  styleUrls: ['./animate-study.component.css']
})
export class AnimateStudyComponent implements OnInit {

  showComponent = 'basic';
  constructor() { }

  ngOnInit() {
  }
  setComponent(event, type: string) {
    event.preventDefault();

    this.showComponent = type;
  }

}
