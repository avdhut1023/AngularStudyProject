import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interface-test',
  templateUrl: './interface-test.component.html',
  styleUrls: ['./interface-test.component.css']
})
export class InterfaceTestComponent implements OnInit {

   kv1: KeyPair = { key:1, value:"Steve" }; // OK
   mystr: string;
 empObj1:IEmployee = {   // OK
    empCode:1,
    empName:"Steve"
}

 empObj2:IEmployee = {    // OK
    empCode:1,
    empName:"Bill",
    empDept:"IT"
}
  constructor() { }

  ngOnInit() {
      let numArr: NumList = [1, 2, 3];
    
    this.mystr = 'numArr[0]';
    this.mystr = `This is example
    New values`;
          console.log('Custom Array using Interface - '+numArr[0]);
      console.log('Custom Array using Interface - ' + numArr[1]);

      let emp = new Employee(1, "Steve");

  }

}

interface IEmployee {
  empCode: number;
  empName: string;
  empDept?:string;
}

//Interface for keypair values
interface KeyPair {
  key: number;
  value: string;
}

// Interface for array
interface NumList {
  [index:number]:number;
}

interface IStringList {
  [index:string]:string;
}

//Interface for extending the class.
interface IEmployee2 {
  empCode: number;
  name: string;
  getSalary:(number)=>number;
}

class Manager implements IEmployee2 {
  empCode: number;  
  name: string;
  mangerId: string;

  getSalary(empCode: number){
    return 50000;
  }

}

class Employee implements IEmployee2 { 
  empCode: number;
  name: string;

  constructor(code: number, name: string) { 
              this.empCode = code;
              this.name = name;
  }

  getSalary(empCode:number):number { 
    if(empCode<=20){
      return 20000;
    }else {
      return 30000;
    }
  }
}

