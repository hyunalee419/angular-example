/**
 * [rxjs6-observable-1](https://stackblitz.com/edit/rxjs6-observable-1)
 */
// observable1.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';

// RxJS 임포트
import { Observable, Subscription, from } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators';

@Component({
  selector: 'app-observable',
  template: '<p>{{ values }}</p>'
})
export class Observable1Component implements OnInit, OnDestroy {
  myArray = [1, 2, 3, 4, 5];
  subscription: Subscription;
  values: number[] = [];

  ngOnInit() {
    // ① 옵저버블 생성
    const observable$ = from(this.myArray);

    this.subscription = observable$
      .pipe(
        // ② 오퍼레이터에 의한 옵저버블 변형
        map(item => item * 2), // 2, 4, 6, 8, 10
        filter(item => item > 5), // 6, 8, 10
        tap(item => console.log(item)) // 6, 8, 10
      )
      // ③ 옵저버블 구독
      .subscribe(
        // next
        value => this.values.push(value),
        // error
        error => console.log(error),
        // complete
        () => console.log('Streaming finished')
      );
  }

  ngOnDestroy() {
    // ④ 옵저버블 구독 해지
    this.subscription.unsubscribe();
  }
}
