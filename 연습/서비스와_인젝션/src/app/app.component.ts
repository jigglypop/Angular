import { Component } from '@angular/core';
import { GreetingService } from './greeting.service';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="sayHi()">Say Hi</button>
    <p>{{ greeting }}</p>
  `,
  styles: [],
  providers: [GreetingService]
})
export class AppComponent {
  greeting : string
  constructor( private greetingService: GreetingService){}
  sayHi() {
    this.greeting = this.greetingService.sayHi()
  }
}
