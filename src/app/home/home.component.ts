import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Observer, Subject, Subscription } from 'rxjs';
import { buffer, debounceTime, filter, map, throttle, throttleTime } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  clickStream = new Subject<void>();
  subscription: Subscription;

  constructor() {
  }

  ngOnInit() {
    this.initDoubleClick();

    const myObservable = interval(1000);

    this.subscription = myObservable.subscribe((num: number) => console.log(num));

    // const customObs = Observable.create((observer: Observer<string>) => {
    //   setTimeout(() => {
    //     observer.next('1st data');
    //   }, 1000);
    //   setTimeout(() => {
    //     observer.next('2nd data');
    //   }, 2000);
    //   setTimeout(() => {
    //     observer.complete();
    //   }, 3000);
    //   setTimeout(() => {
    //     observer.next('3d data');
    //   }, 4000);
    // });

    // customObs.subscribe(
    //   (data: string) => {
    //     console.log(data);
    //   },
    //   (err: string) => {
    //     console.log(err);
    //   },
    //   () => {
    //     console.log('COMPLETED');
    //   }
    // );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private initDoubleClick() {
    const stream = this.clickStream.pipe(
      debounceTime(250),
    );

    this.clickStream.pipe(
      buffer(stream),
      map(list => list.length),
      filter(x => x === 2),
    ).subscribe(() => {
      console.log('double!');
    });
  }

  handleClick() {
    this.clickStream.next();
  }
}
