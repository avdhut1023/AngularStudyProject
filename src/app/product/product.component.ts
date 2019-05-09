import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  template: `
          <h3 class='h3-class'> This sample Product</h3>
          <h3 class='h3-class'> This sample Product</h3>
            `,
  styles: [`.h3-class {
    background-color: red
  }`]
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

}
