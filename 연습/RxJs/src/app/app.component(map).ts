import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of, Subscription, throwError } from 'rxjs';
import { catchError, debounceTime, map, switchMap, tap } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  template: '',
  styles: []
})
export class AppComponent implements OnInit{

  ngOnInit(){
    const nums = of(1, 2, 3)
    const squaredValues = map(( val : number ) => val * val )
    const squaredNums = squaredValues(nums)
    squaredNums.subscribe(x => console.log(x))
    console.log(squaredNums)

  }
}
