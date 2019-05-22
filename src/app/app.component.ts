import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'app';

    ngOnInit() {
        const obs = Observable.create(observer => {
            setInterval(() => observer.next(Date.now()), 1000);
        })
            .pipe(
                share()
            );

        obs.subscribe(v => console.log('1st subscriber: ' + v));

        setTimeout(() => {
            obs.subscribe(v => console.log('2nd subscriber: ' + v));
        }, 1000);
    }
}
