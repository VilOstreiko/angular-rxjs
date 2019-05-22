import { Component, OnInit } from '@angular/core';
import { interval, Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // const myObservable = interval(1000);

    // myObservable.subscribe((num: number) => console.log(num));



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

}
