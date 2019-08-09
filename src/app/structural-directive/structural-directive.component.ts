import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directive',
  templateUrl: './structural-directive.component.html',
  styleUrls: ['./structural-directive.component.css']
})
export class StructuralDirectiveComponent implements OnInit {

 mycolor: string = 'yellow';
  country: 'UK';
  isPresent: boolean = false;
  people: any[] = [
    {
      'name': 'Douglas  Pace',
      'age': 35,
      'country': 'MARS'
    },
    {
      'name': 'Mcleod  Mueller',
      'age': 32,
      'country': 'USA'
    },
    {
      'name': 'Day  Meyers',
      'age': 21,
      'country': 'HK'
    },
    {
      'name': 'Aguirre  Ellis',
      'age': 34,
      'country': 'UK'
    },
    {
      'name': 'Cook  Tyson',
      'age': 32,
      'country': 'USA'
    }
  ];
  constructor() { }

  ngOnInit() {
  }



}
