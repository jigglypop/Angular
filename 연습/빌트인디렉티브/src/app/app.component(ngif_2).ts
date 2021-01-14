import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="isShow=!isShow">{{isShow ? 'Hide':'Show'}}</button>
    <!-- ngIf에 의한 show/hide (DOM 요소에는 남는다) -->
    <p *ngIf="isShow">Lorem ipsum dolor sit amet</p>
    <!-- 스타일 바인딩에 의한 show/hide -->
    <p [style.display]="isShow ? 'block' : 'none'">Lorem ipsum dolor sit amet</p>

    <input type="radio" id="one" name="skill" (click)="mySkill=$event.target.value" value="HTML">
    <label for="one">HTML</label>
    <input type="radio" id="two" name="skill" (click)="mySkill=$event.target.value" value="CSS">
    <label for="two">CSS</label>

    <div *ngIf="mySkill==='HTML' else elseBlock" >HTML</div>
    <ng-template #elseBlock><div>CSS</div></ng-template>

    <div *ngIf="mySkill==='HTML' then thenBlock1 else elseBlock1" ></div>
    <ng-template #thenBlock1><div>HTML</div></ng-template>
    <ng-template #elseBlock1><div>CSS</div></ng-template>
  `
})
export class AppComponent {
  isShow=true
  mySkill='HTML'
}
