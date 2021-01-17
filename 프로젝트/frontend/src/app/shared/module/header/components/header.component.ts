import { Component, OnInit } from '@angular/core';
import { createSelector, select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { logoutAction } from 'src/app/auth/store/actions/logout.action';
import { authFeatureSelector } from 'src/app/auth/store/selector/selector';
import { IAuthState } from 'src/app/auth/types/auth.interface';
import { IUser } from 'src/app/auth/types/user.interface';

// 셀렉터
const currentUserSelector = createSelector(
  authFeatureSelector,
  (authState: IAuthState) => authState.currentUser
)
const isLoggedInSelector = createSelector(
  authFeatureSelector,
  (authState: IAuthState) => authState.isLoggedIn
)

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  constructor(private store:Store){}
  currentUser$ :  Observable<IUser>
  isLoggedIn$ : Observable<boolean>
  user: IUser
  isLoggedIn : boolean

  ngOnInit(): void {
    // 현재 유저
    this.currentUser$ = this.store
      .pipe(select(currentUserSelector))
    this.currentUser$
      .subscribe(
        (res:IUser)=> this.user = res
    )

    // 로그인 되어있는지
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector))
    this.isLoggedIn$
    .subscribe(
      (res:boolean | null)=> res === true ? this.isLoggedIn = true : this.isLoggedIn = false
    )
  }

  onLogout(){
    this.store.dispatch(logoutAction())
  }
}
