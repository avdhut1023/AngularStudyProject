export class Person {
    public firstname: string;
    public lastname: string;
    age: number;

    constructor(firstname, lastname) {
      this.firstname = firstname;
      this.lastname = lastname;
    }

    public getFullName() {
      return this.firstname + ' ' + this.lastname;
    }
  }