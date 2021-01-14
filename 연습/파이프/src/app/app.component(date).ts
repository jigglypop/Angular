import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h2>{{ today }}</h2>
    <h2>{{ today | date }}</h2>
    <h2>{{ today | date : 'y년 MM월 dd일 HH시 mm분 ss초 ' }}</h2>

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  today = new Date();
}
