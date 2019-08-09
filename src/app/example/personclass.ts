export class Person  {

    public firstname: string;
    public lastname: string;
    private middlename: string;
    protected dob: string='11/11/1111';

    age: number;

    constructor(firstname, lastname) {
      this.firstname = firstname;
      this.lastname = lastname;
      this.middlename = 'ACB';
    }

    public getFullName() {
      return this.firstname + ' ' + this.lastname;
    }

    public getEmpMsg(a: string, b?: any, c?: number): string | number {
        console.log(a + ' ' + b + ' ' + c + ' ' );
        return c ;
    }
  }

  export class Employee extends Person implements personMethods, employeeMethods {
    firstname: string;
    getDepartment() {
     console.log('Department');
    }
    getAge() {
      this.getFullName()
    }
      constructor() {
          super('', '');
           super.getFullName();
          console.log(this.dob);
      }
  }

  interface personMethods{
     getAge();
  }


  interface employeeMethods{
    getDepartment();
 }
