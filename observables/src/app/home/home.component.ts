import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, interval, Observer, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  items: string[] = [];
  customObsSubscription: Subscription;
  numbersObsSubscription: Subscription;

  constructor() { }

  ngOnInit() {

    const numbers = interval(1000);
    numbers.subscribe(
      (number: number) => {
        // console.log(number);
      }
    )

    const observable = Observable.create(
      (observer: Observer<{data: string}>) => {
        setTimeout(
          () => {
            observer.next({data: 'Okay'});
          }, 2000
        );
        setTimeout(
          () => {
            observer.next({data: 'Cool'});
          }, 4000
        );
        setTimeout(
          () => {
            observer.error({data: 'Error don dey!'});
          }, 7000
        )
      }
    );

    this.customObsSubscription = observable.subscribe(
      (data: {data: string}) => {
        this.items.push(data.data);
      },
      (error: {data: string}) => {
        console.error(error.data);
      },
      () => {
        console.log('Observable completed!');
      }
    )

  }

  // ngOnDestroy
  ngOnDestroy() {
    console.log('Component destroyed!')
    this.numbersObsSubscription.unsubscribe()
    this.customObsSubscription.unsubscribe()
  }

}
