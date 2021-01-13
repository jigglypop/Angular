import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <div>{{ contentText }}</div>
  `,
  styles: [`
    div {
      width : 100px;
      height : 100px;
      text-align : center;
      line-height : 100px;
      background-color : gray;
      color : white;
      margin-top : 10px;
    }
  `]
})
export class ChildComponent {

  isShow = true
  contentText = 'Child'

  changeText(text: string){
    this.contentText = text
  }

}
