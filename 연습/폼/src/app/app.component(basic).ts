import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <input type="text" (keyup.enter)="checkValue($event.target.value)">
    <em>{{ checkResult }}</em>
  `,
  styles: []
})
export class AppComponent {
  checkResult: string
  checkValue(value){
    this.checkResult = value.length > 3 ? '' : '4자 이상 입력하세요'
  }
}
