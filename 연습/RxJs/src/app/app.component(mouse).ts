import { Component, OnInit } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <h3>Mouse Coordinates</h3>
    <h3>X : {{ posX }} / Y : {{ posY }}</h3>
  `,
  styles: []
})
export class AppComponent implements OnInit{
  mousePosition$ : Observable<Event>
  posX : number = 0
  posY : number = 0
  ngOnInit(){
    // 옵저버블 생성
    this.mousePosition$ = fromEvent(document, 'mousemove')
    // 구독
    this.mousePosition$.subscribe(
      (event: MouseEvent ) => {
        this.posX = event.clientX
        this.posY = event.clientY
      },
      error => console.log(error),
      () => console.log('complete!')
    )
  }
}
