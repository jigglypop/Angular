import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

interface Todo{
  id : number
  content : string
  completed : boolean
}

@Component({
  selector: 'app-root',
  template: `
    <input type="text" [(ngModel)]="content" placeholder="todo">
    <button (click)="add()">Add</button>
    <ul>
      <li *ngFor="let todo of todos">{{ todo.content }}</li>
    </ul>
  `,
})
export class AppComponent implements OnInit{
  todos: Todo[]
  content: string
  url = 'http://localhost:3000/todos'

  constructor(public http: HttpClient){}

  ngOnInit(){
    this.getTodos()
    .subscribe(todos => this.todos = todos)
  }

  add(){
    if (!this.content) { return }
    this.addTodo()
    .subscribe(todo => this.todos = [ ...this.todos, todo ])
  }

  private getTodos() : Observable<Todo[]>{
    return this.http.get<Todo[]>(this.url)
  }

  private addTodo() : Observable<Todo>{
    const payload = {content : this.content, completed: false}
    return this.http.post<Todo>(this.url, payload)
  }
}
