import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { tap, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rx-jsstudy',
  templateUrl: './rx-jsstudy.component.html',
  styleUrls: ['./rx-jsstudy.component.css']
})
export class RxJsstudyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // Create simple observable that emits three values
      /*const myObservable = of(1, 2, 3);
      // Create observer object
      const myObserver = {
        next: x => console.log('Observer got a next value: ' + x),
        error: err => console.error('Observer got an error: ' + err),
        complete: () => console.log('Observer got a complete notification'),
      };

       // Execute with the observer object
      myObservable.subscribe(myObserver);
      
                // Create an Observable out of a promise
              const data = from(fetch('http://localhost:3004/posts'));
          // Subscribe to begin listening for async result
              data.subscribe({
                      next(response) { console.log(response); },
                      error(err) { console.error('Error: ' + err); },
                      complete() { console.log('Completed'); }
                });*/
                // Create an Observable that will publish a value on an interval
          //const secondsCounter = interval(1000);
          // Subscribe to begin publishing values
            //secondsCounter.subscribe(n =>
            //console.log(`It's been ${n} seconds since subscribing!`));
          /*
            const nums = of(1, 2, 3);

            const squareValues = map((val: number) => val * val);
            const squaredNums = squareValues(nums);

            squaredNums.subscribe(x => console.log(x));
          */



          // Create a function that accepts an Observable.
       /*    const squareOddVals = of(1, 2, 3, 4, 5).pipe(
            filter((n: number) => n % 2 === 0),
            map((n: number) => n * n)
          );

   */        // Create an Observable that will run the filter and map functions
          //const squareOdd = squareOddVals;

          // Subscribe to run the combined functions
         // squareOdd.subscribe(x => console.log(x));


  }

}
