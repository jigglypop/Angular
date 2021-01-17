import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay, tap } from 'rxjs/operators';

interface Todo{
  id : number
  content : string
  completed : boolean
}

@Component({
  selector: 'app-root',
  template: ``,
})
export class AppComponent implements OnInit{
  todos: Todo[]
  url = 'http://localhost:3000/todos'

  constructor(public http: HttpClient){}
  getTodos(): Observable<Todo[]>{
    return this.http.get<Todo[]>(this.url).pipe(
      tap(()=> console.log('POST request')),
      shareReplay()
    )
  }

  ngOnInit(){
    const todos$ = this.getTodos()
    todos$.subscribe(console.log)
    todos$.subscribe(console.log)
  }

}
