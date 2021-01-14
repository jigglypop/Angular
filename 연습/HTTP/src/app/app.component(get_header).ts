import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface Todo{
  id : number
  content : string
  completed : boolean
}

@Component({
  selector: 'app-root',
  template: `
    <ul>
      <li *ngFor="let todo of todos">{{ todo.content }}</li>
    </ul>
  `,
})
export class AppComponent implements OnInit{
  todos: Todo[]
  url = 'http://localhost:3000/todos'

  constructor(public http: HttpClient){}

  ngOnInit(){
    // 파라미터
    const params = new HttpParams()
    .set('id','1')
    .set('completed', 'false')

    this.http
    .get<Todo[]>(this.url, { params })
    .subscribe(
      todos => this.todos = todos
    )
  }
}
