import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h3>템플릿 참조 변수를 사용하여 자식 컴포넌트에 접근</h3>
    <counter #counter></counter>
    <button (click)="counter.increase()">+</button>
    <button (click)="counter.decrease()">-</button>

    <h3>템플릿 참조 변수를 사용하여 자식 네이티브 DOM 요소에 접근</h3>
    <h1 #h1>Color</h1>
    <button (click)="h1.style.color='red'">
      change text color
    </button>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stateful-stateless';
}
