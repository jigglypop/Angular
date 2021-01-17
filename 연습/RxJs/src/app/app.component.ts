import { Component, OnInit } from '@angular/core';
import { of, pipe } from 'rxjs';
import { filter, map } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  template: '',
  styles: []
})
export class AppComponent implements OnInit{

  ngOnInit(){
    const nums = of(1, 2, 3, 4, 5)
    const squareOddVals = pipe(
      filter(( n : number ) => n % 2 !== 0),
      map( n => n * n )
    )
    const squareOdd = squareOddVals(nums)
    squareOdd.subscribe( x => console.log(x))

  }
}
