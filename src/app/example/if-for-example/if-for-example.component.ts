import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-for-example',
  templateUrl: './if-for-example.component.html',
  styleUrls: ['./if-for-example.component.css']
})
export class IfForExampleComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    for(let i = 0; i <= 10; i++){
      console.log('For Loop'+ i);
    }
    let i=0;
    do{

      console.log('Do while Loop'+ i);
      i++;
    }while(i<=10)

    while(i>0){
      console.log('In While loop'+i);
      i--;
    }

  }

}
