import { Component } from '@angular/core';

@Component({
  selector:'counter',
  template:`<h1>{{ count }}</h1>`
})

export class CounterComponent {
  count : number = 0
  increase() {
    this.count++
  }
  decrease() {
    this.count--
  }
}
