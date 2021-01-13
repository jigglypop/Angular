import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="isShow=!isShow">{{isShow ? 'Hide':'Show'}}</button>
    <!-- ngIf에 의한 show/hide (DOM 요소에는 남는다) -->
    <p *ngIf="isShow">Lorem ipsum dolor sit amet</p>
    <!-- 스타일 바인딩에 의한 show/hide -->
    <p [style.display]="isShow ? 'block' : 'none'">Lorem ipsum dolor sit amet</p>
  `
})
export class AppComponent {
  isShow=true
}
