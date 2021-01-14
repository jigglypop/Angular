import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <h3>DatePipe</h3>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  today = new Date()
  price = 0.1234
  collection = ['a', 'b', 'c', 'd']
  stc = 'abcdefghij'
  object = {foo:'bar', baz:'qux', nested:{xyz:3}}
  pi = 3.141592
  num = 1.3495
  // second$ = interval(1000).pipe(take(10))
}
