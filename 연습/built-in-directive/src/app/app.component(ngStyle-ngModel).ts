import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      Width : <input type="text" [(ngModel)]="width">
      <button (click)="increaseWidth()">+</button>
      <button (click)="decreaseWidth()">-</button>
    </div>
    <div>
    <div>
      Height : <input type="text" [(ngModel)]="height">
      <button (click)="increaseHeight()">+</button>
      <button (click)="decreaseHeight()">-</button>
    </div>
    <button (click)="isShow=!isShow">{{isShow ? 'Hide' : 'Show'}}</button>
    <div
      [ngStyle] = "{
        'width.px' : width,
        'height.px' : height,
        'background-color' : bgColor,
        'visibility' : isShow ? 'visible' : 'hidden'
      }"
    ></div>
  `
})
export class AppComponent {
  width = 200
  height = 400
  bgColor = '#4caf50'
  isShow = true

  increaseWidth(){
    this.width += 10
  }
  decreaseWidth(){
    this.width -= 10
  }
  increaseHeight(){
    this.height += 10
  }
  decreaseHeight(){
    this.height -= 10
  }
}
