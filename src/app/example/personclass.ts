export class Person {
    firstname: string;
    lastname: string;
    age: number;

    constructor(firstname, lastname) {
      this.firstname = firstname;
      this.lastname = lastname;
    }

    public getFullName() {
      return this.firstname + ' ' + this.lastname;
    }
  }