import { Component, OnInit } from '@angular/core';
import { Person } from './personclass';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  firstname: string;
  lastname;
  nos: number;
  isChecked: boolean;
  val: undefined;
  arr: number[] = [1, 2];

  checkval: any[] = [
      1,
      'first',
      true,
      22.32
  ];
  //myMap: Map<string, number> = new Map();
  //set: Set<number> = new Set();

  constructor() { }

  ngOnInit() {
    let person = new Person('Abc', 'Xyz');
    console.log(person);
    console.log(person.getFullName());
    /* console.log(this.checkval);
    this.myMap.set('value', 23);
    this.mapSetExample(); */
  }

  public mapSetExample(){
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

for (let [key, value] of map) {
  console.log(key, value);
}

console.log(map.get("A"));
console.log(map.has("A"));
console.log(map.size);

map.delete("A");
console.log(map.size);
map.set('D', 4);

console.log(map.size);

map.clear();
console.log(map.size);


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

for (let entry of set2) {
  console.log(entry);
}
  }

}

