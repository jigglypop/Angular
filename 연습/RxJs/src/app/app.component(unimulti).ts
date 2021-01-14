import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  template: ``,
  styles: []
})
export class AppComponent implements OnInit {


  ngOnInit(){
    // 유니 캐스트
    const coldObservable$ = Observable.create(
      observer => observer.next(Math.random())
    )
    coldObservable$.subscribe(
      value => console.log(`1st Cold observable's observer ${value}`)
    )
    coldObservable$.subscribe(
      value => console.log(`2nd Cold observable's observer ${value}`)
    )

    // 멀티 캐스트
    const subject = new Subject()
    const hotObservable$ = subject.asObservable()

    hotObservable$.subscribe(
      value => console.log(`1st Cold observable's observer ${value}`)
    )
    hotObservable$.subscribe(
      value => console.log(`2nd Cold observable's observer ${value}`)
    )
    subject.next(Math.random())
  }
}
