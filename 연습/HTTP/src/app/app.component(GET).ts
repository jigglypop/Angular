import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  template: `
    <ul>
      <li *ngFor="let todo of todos">{{todo.content}}</li>
    </ul>
    <pre>{{ todos | json }}</pre>
  `,
})
export class AppComponent implements OnInit{
  todos: Todo[]
  url = 'http://localhost:3000/todos'
  headers : any
  status :  any

  constructor(public http: HttpClient){}
  ngOnInit(){
    // HttpHeaders
    // const headers = new HttpHeaders()
    //   .set('Context-type', 'application/json')
    //   .set('Authorization', 'my-auth-token-get')

    // this.http.get<Todo[]>(this.url).subscribe(todos => this.todos = todos)
    this.http.get<Todo[]>(this.url, { observe: 'response' })
      .pipe(
        tap(res => console.log(res)),
        tap(res => console.log(res.headers)),
        tap(res => console.log(res.status)),
      )
      .subscribe( todos => this.todos = todos.body)

  }
}
