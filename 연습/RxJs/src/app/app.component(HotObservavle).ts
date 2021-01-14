import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  template: ``,
  styles: []
})
export class AppComponent implements OnInit {


  ngOnInit(){
    const subject = new Subject();
    const numbersBySubject$ = subject.asObservable()
    subject.next(1)
    subject.next(2)

    numbersBySubject$.subscribe(
      value => console.log(`1st next : ${value}`),
      error => console.log(`1st error : ${error}`),
      () => console.log('1st complete')
    )

    numbersBySubject$.subscribe(
      value => console.log(`2nd next : ${value}`),
      error => console.log(`2nd error : ${error}`),
      () => console.log('2nd complete')
    )

    subject.next(10)
    subject.next(20)
    subject.next(30)
  }
}
