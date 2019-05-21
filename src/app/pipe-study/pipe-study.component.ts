import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval } from 'rxjs/observable/interval';
import { take, map } from 'rxjs/operators';
import {Observable} from 'rxjs';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-pipe-study',
  templateUrl: './pipe-study.component.html',
  styleUrls: ['./pipe-study.component.css']
})
export class PipeStudyComponent implements OnInit, OnDestroy {

  promise: Promise<{}>;
  observable$: Observable<number>;
  subscription: Subscription = null;
  observableData: number;
  
  constructor() { 
    this.promise = this.getPromise();
    this.observable$ = this.getObservable();
    this.subscribeObservable();
  }

  ngOnInit() {
  }

  getObservable() {
    
    return interval(1000).pipe(
      take(10),
      map(v => v * v)
    );
  }

  // AsyncPipe subscribes to the observable automatically
  subscribeObservable() {
    this.subscription = this.getObservable().subscribe(
      v => (this.observableData = v)
    );
  }

  getPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve("Promise complete!"), 3000);
    });
  }

  // AsyncPipe unsubscribes from the observable automatically
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
