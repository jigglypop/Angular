import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav>
      <a routerLink="/home">Home</a>
      <a routerLink="/service">Service</a>
      <a routerLink="/about">About</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [`
    nav {
      height : 60p;
      background-color : #4a4c88;
    }
    nav > a{
      line-height : 60px;
      margin : 0 60px;
      color : #fff;
      text-decoration : none;
      font-weight : bold;
      text-transform : uppercase;
      opacity : 0.7;
    }
    nav > a:hover {
      opacity : 1.0;
    }
  `]
})
export class AppComponent {}
