import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-with-template',
  template: `<h1>Component Template</h1>
                <p>Changing Component Data</p>`,
  styles: [`p {
              font-size: 20px;
              border: 2px solid tomato
            }`]
})
export class WithTemplateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
