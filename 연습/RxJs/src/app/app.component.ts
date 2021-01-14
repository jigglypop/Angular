import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of, Subscription, throwError } from 'rxjs';
import { catchError, debounceTime, map, switchMap, tap } from 'rxjs/operators'

interface GithubUser{
  login : number
  name :  string
}

@Component({
  selector: 'app-root',
  template: `
    <h2>Observable Events</h2>
    <input type="text" placeholder="Enter github userid"
      [formControl]="searchInput">
    <pre>{{ githubUser | json }}</pre>
  `,
  styles: []
})
export class AppComponent implements OnInit, OnDestroy {
  searchInput : FormControl = new FormControl('');
  githubUser : GithubUser
  subscription : Subscription

  constructor(private http: HttpClient){}

  ngOnInit(){
    this.subscription = this.searchInput.valueChanges
    .pipe(
      debounceTime(500),
      switchMap((userId:string) => this.getGihubUser(userId))
    )
    .subscribe(
      user => this.githubUser = user,
      error =>console.log(error)
    )
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }

  getGihubUser(userId:string): Observable<GithubUser>{
    return this.http
    .get<GithubUser>(`https://api.github.com/users/${userId}`)
    .pipe(
      map(user => ({ login: user.login, name: user.name})),
      tap(console.log),
      catchError(err => {
        if (err.status === 404){
          return of(`[ERROR] Not found user: ${userId}`)
        }else{
          return throwError(err)
        }
      })
    )
  }
}
