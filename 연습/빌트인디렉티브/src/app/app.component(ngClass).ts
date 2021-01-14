import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <ul>
      <li [ngClass]="stringCssClasses">bold blue</li>
      <li [ngClass]="ArrayCssClasses">italic red</li>
      <li [ngClass]="ObjectCssClasses">bold red</li>
      <li [ngClass]="getCssClasses('italic-blue')">italic blue</li>
    </ul>
  `,
  styles: [`
    .text-bold {
      font-weight:bold;
    }
    .text-italic {
      font-weight:italic;
    }
    .color-blue {
      color:blue
    }
    .color-red {
      color:red
    }
  `]
})
export class AppComponent {
  state = true;
  stringCssClasses = 'text-bold color-blue'
  ArrayCssClasses = ['text-italic', 'color-red']
  ObjectCssClasses = {
    'text-bold' : this.state,
    'text-italic' : !this.state,
    'color-blue' : !this.state,
    'color-red' : !this.state,
  }
  getCssClasses(flag:string){
    let classes;
    if (flag === 'italic-blue'){
      classes ={
        'text-bold' : !this.state,
        'text-italic' : this.state,
        'color-blue' : !this.state,
        'color-red' : this.state,
      }
    }else{
      classes ={
        'text-bold' : this.state,
        'text-italic' : !this.state,
        'color-blue' : this.state,
        'color-red' : !this.state,
      }
    }
  }
}
