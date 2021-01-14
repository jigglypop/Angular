import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  template: ``,
  styles: []
})
export class AppComponent implements OnInit{
  ngOnInit(){
    const subscriber = (observer) =>{
      try {
        observer.next(1)
        observer.next(2)
        // complete 노티피케이션 방출
        observer.complete()
      }catch(e){
        // error 노티피케이션 방출
        observer.error(e)
      }finally{
        return () => console.log('Unsubscribed!')
      }
    }

    // 옵저버블 생성
    const obserbable$ = new Observable(subscriber)
    // 구독(Subscription)
    obserbable$.subscribe(
      // next 노티피케이션에 반응
      value => console.log(value),
      // error 노티피케이션에 반응
      error => console.error(error),
      // Complete 노티피케이션에 반응
      ()=>console.log('Complete')
    )
  }
}
