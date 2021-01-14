import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
  `,
  styles: []
})
export class AppComponent implements OnInit {
  ngOnInit(){
    const numbers$ = Observable.create(observer =>{
      console.log('[New subscription created]')
      let i = 1
      const interval = setInterval(
        () => i <= 5 ? observer.next(i++) : observer.complete(),
        1000
      )
      return () => clearInterval(interval)
    })

    numbers$.subscribe(
      value => console.log(`1st subscription next : ${value}`),
      error => console.log(`1st subscription error : ${error}`),
      () => console.log(`1st subscription complete`)
    )

    setTimeout(()=> numbers$.subscribe(
      value => console.log(`1st subscription next : ${value}`),
      error => console.log(`1st subscription error : ${error}`),
      () => console.log(`1st subscription complete`)
    ), 6000)
  }
}
