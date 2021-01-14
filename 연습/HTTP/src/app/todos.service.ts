import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { Todo } from './todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService{
  url = 'http://localhost:3000/todos'

  constructor(public http: HttpClient){}

  getAll() : Observable<Todo[]>{
    return this.http.get<Todo[]>(this.url).pipe(catchError(this.handleError))
  }

  add(content : string ) : Observable<Todo>{
    const payload = { content, completed : false }
    return this.http.post<Todo>(this.url, payload).pipe(catchError(this.handleError))

  }

  private handleError(error: HttpErrorResponse){
    let message = ''
    if (error.error instanceof ErrorEvent){
      console.error(`Client-side error: ${error.error.message}`)
      message = error.error.message
    }else{
      console.error(`Server-side error: ${error.status}`)
      message = error.message
    }
    return throwError({
      title : 'Something wrong! please try again later',
      message
    })
  }
}
