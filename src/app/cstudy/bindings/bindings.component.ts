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
  memberStudent = new Student();

  constructor() { }

  ngOnInit() {
    this.username = "vinayak";
    this.addition = this.add(-2010,300);
    let p =  new Person();
   // this.memberStudent ;

    console.log('Using Property ---- '+p.name);
    console.log('Using Method ---- '+p.getName());
    this.sampleParam('ABC','XYZ');
    this.sampleParam('ABC');
  }

   add(a: number, b: number): number{
     return (a+b);
  }

  sampleParam(a: string,b?: string): void{
    this.username = a+ ' ------- '+b;
  }



}

 class Person{
    name: string;
   age: number;
   private isMarried: boolean = false;

   constructor(){
     this.name= "Barak";
     this.age = 50;
   }

   

   getName(){
    return this.name;
  }

  public getAge(){
    return this.age;
  }
}

 class Student extends Person {
 
  constructor(){
    super();
    this.age = 50;
    this.name="Vinayak";
  //  this.isMarried=true;
  }
  }

