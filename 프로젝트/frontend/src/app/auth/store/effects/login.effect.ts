import {Injectable} from '@angular/core'
import {createEffect, Actions, ofType} from '@ngrx/effects'
import {map, catchError, switchMap, tap } from 'rxjs/operators'
import {of} from 'rxjs'
import { AuthService } from '../../service/auth.service'
import { IUser } from '../../types/user.interface'
import { HttpErrorResponse } from '@angular/common/http'
import { Router } from '@angular/router'
import { TokenService } from 'src/app/shared/service/token.service'
import { loginAction, loginFailureAction, loginSuccessAction } from '../actions/login.action'

@Injectable()
export class LoginEffect {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginAction),
      switchMap(({ request }) => {
        return this.authService.login(request).pipe(
          map((currentUser: IUser) => {
            this.tokenService.set(currentUser.token)
            return loginSuccessAction({ currentUser })
          }),
          catchError(( error : HttpErrorResponse) => {
            return of(
              loginFailureAction({ error: error })
            )
          })
        )
      })
    )
  )

  redirectAfterSubmit$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginSuccessAction),
        tap(() => {
          this.router.navigateByUrl('/')
        })
      ),
    { dispatch: false }
  )

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
    private tokenService: TokenService
  ) {}
}
