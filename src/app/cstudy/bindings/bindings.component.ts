import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.css']
})
export class BindingsComponent implements OnInit {
 
  private username: string;
  protected id: number;
  public isMarried: boolean;
  address: any;
  vechicle: string[];
  addition: number;
  constructor() { }

  ngOnInit() {
    this.username = "vinayak";
    this.addition = this.add(-2010,300);
  }

   add(a: number, b: number): number{
     return (a+b);
  }



}
