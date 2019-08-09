import { Component, OnInit } from '@angular/core';
import { Person, Employee } from './personclass';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent  implements OnInit {

  firstname: string;
  lastname;
  nos: number;
  isChecked: boolean;
  val: undefined;
  arr: number[] = [1, 2];
  isEnabled: boolean = false;
  person = new Person('Abc', 'Xyz');
  emp = new Employee();
  checkval: any[] = [
      1,
      'first',
      true,
      22.32
  ];

  imgPath: string = 'assets\\HTML_Logo.png';
  myMap: Map<string, number> = new Map();
  set: Set<number> = new Set();
  mcar: Car = new Car('1233');
  newCar: MyCar = new MyCar();
  calc2: Calculator = new Calculator(30, 40);
  
  constructor() {
    //super('', '');
   }

  ngOnInit() {
    let calc: Calculator = new Calculator(10, 20), num3: string;
    console.log('Addition '+ calc.add());
    console.log('Substract '+ calc.substract());
    console.log('Multiple '+ calc.multiply());
    console.log('divide '+ calc.divide());

    console.log('working on the Car Object '+ this.mcar);
    this.newCar.methodName(30, 40);
    this.newCar.name = 'Maruti 800';
  }

  firstMethod(event){
    console.log('Printing Firstname - '+ this.firstname);
       console.log(event.keyCode);
       this.newCar.name = this.firstname;
  }

}

class Calculator {
  num1: number;
  num2: number;

  constructor(n1: number, n2: number){
    this.num1= n1;
    this.num2 = n2;
  }

  public add(){
    return (this.num1+this.num2);
  }

  
  public substract(){
    return (this.num1-this.num2);
  }
  
  public multiply(){
    return (this.num1*this.num2);
  }
  
  public divide(){
    return (this.num1/this.num2);
  }
}

class Car {

 public name: string;
 public kmRun: number = 10000;
 public model: number = 1230;
 public isDamaged: boolean = false;
 protected engine: any ;

  constructor(n1: string) {
    this.name = 'Alto';
    this.engine =  'demo string';
    console.log('In side constructor ' + this.engine);
    this.engine =  1234;
    console.log('In side constructor ' + this.engine);
    this.engine = true;
    /*console.log('In side constructor ' + this.engine);
    this.engine = {
      'name': 'test'
    };

    console.log('In side constructor ' + this.engine.name); */
    console.log('In Metho Return ' + this.methodName(10, 20));
  }

  public methodName(t1: number, t2: number): boolean{
    console.log('Inside using newCar the method '+t1+ ' '+ t2 );
    return true;
  }


}

class MyCar extends Car{

  constructor() {
    super('string');
  }
}

class Animal {
  protected eyes: number;
  protected legs: number;
  constructor(){
    this.eyes =  2;
    this.legs = 4;

  }

  public getLegs(){
    return this.legs;
  }
  public getEyes(){
    return this.eyes;
  }
}

class Cat extends Animal {
  
  constructor(){
    super();
    console.log(this.eyes+ ' '+ this.legs);
    console.log(this.getEyes()+ ' '+ this.getLegs());
  }
}
/*
    let person = new Person('Abc', 'Xyz');
      console.log(person);
      console.log(person.getFullName());
      console.log(person.firstname);
    console.log(person.firstname);
    let emp = new Employee();
    emp.getDepartment();
   let rval = emp.getEmpMsg('abc', 669, 34);
   console.log('Returned value'+ rval);*/
 /*       console.log(this.checkval);
      this.myMap.set('value', 23);
      this.mapSetExample();
 */

/*public mapSetExample(){
    // Map
      let map = new Map();
      map.set("A", 1);
      map.set("B", 2);
      map.set("C", 3);

      let map2 = new Map()
        .set("A", 1)
        .set("B", 2)
        .set("C", 3);

      let map3 = new Map([
        ["A", 1],
        ["B", 2],
        ["C", 3]
      ]);
/* 
      for (let entry of map.keys()) {
        console.log(entry[0]+ ' ' + entry[1]);    //"A" 1 "B" 2 "C" 3
      } 

      console.log('My value For Each');
      map.forEach((value: boolean, key: string) => {
        console.log(key + ' ' + value);
      });

      console.log('Get Value - '+map.get("A"));
      console.log('Has Value - '+map.has("G"));
      console.log('Map Size - '+map.size);

      map.delete("A");
      console.log('Map Size - '+map.size);
      map.set('D', 4);

      console.log('Map Size - '+map.size);

      map.clear();
      console.log('Map Size - Clear  All -'+map.size);


      // Set
      let set = new Set();
      set.add('APPLE');
      set.add('ORANGE');
      set.add('MANGO');


      let set2 = new Set()
        .add('APPLE')
        .add('ORANGE')
        .add('MANGO');

      let set3 = new Set(['APPLE', 'ORANGE', 'MANGO']);

      console.log(set.has('APPLE'));

      set.delete('APPLE');

      console.log(set.size);

      set.clear();
      console.log(set.size);


      let set4 = new Set();
      set3.add('Moo');
      console.log(set3.size);
      // 1
      set4.add('Moo');
      console.log(set4.size);
      // 1

      /* for (let entry of set2) {
        console.log(entry);
      } 
  }

  firstMethod(event){
    
    //alert('Yay in first Method');
    console.log(event.keyCode);
  }*/