import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-structural-directive",
  templateUrl: "./structural-directive.component.html",
  styleUrls: ["./structural-directive.component.css"]
})
export class StructuralDirectiveComponent implements OnInit {
  showComponent: string = "ngif";
  mycolor: string = "yellow";
  mycolor2: string = "green";
  country: "UK";
  isPresent: boolean = false;
  people: any[] = [
    {
      name: "Douglas  Pace",
      age: 35,
      country: "MARS"
    },
    {
      name: "Mcleod  Mueller",
      age: 32,
      country: "USA"
    },
    {
      name: "Day  Meyers",
      age: 21,
      country: "HK"
    },
    {
      name: "Aguirre  Ellis",
      age: 34,
      country: "UK"
    },
    {
      name: "Cook  Tyson",
      age: 32,
      country: "USA"
    }
  ];
  isLoggedIn: boolean;
  ifPrice: number = 0;
  toggle: boolean;
  num1: number[] = [20, 100, 2002, 3028];
  str1: string[] = ["1", "asd", "dfg", "hjk"];
  num2 = [0, 1, 2, 3];
  fetchData = [
    { title: "saurabh", description: "dd", tagline: "tt", date: "dd" },
    { title: "aman", description: "dd", tagline: "tt", date: "dd" },
    { title: "jessica", description: "dd", tagline: "tt", date: "dd" },
    { title: "rosh", description: "dd", tagline: "tt", date: "dd" }
  ];
  constructor() {}

  ngOnInit() {
    this.num1 = this.num2;
    console.log(this.num1[2]);
    this.num2 = [];
  }

  setComponent(event, type: string) {
    event.preventDefault();

    this.showComponent = type;
  }
}
