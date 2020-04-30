import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-with-template',
  template: `<h1>Component Template</h1>
                <p>This is the component with template 123</p>`,
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
