import {Injectable} from '@angular/core'
import {createEffect, Actions, ofType} from '@ngrx/effects'
import {map, catchError, switchMap, tap } from 'rxjs/operators'

import {
  registerAction,
  registerSuccessAction,
  registerFailureAction
} from '../actions/register.action'
import {of} from 'rxjs'
import { AuthService } from '../../service/auth.service'
import { IUser } from '../../types/user.interface'
import { HttpErrorResponse } from '@angular/common/http'
import { Router } from '@angular/router'
import { TokenService } from 'src/app/shared/service/token.service'

@Injectable()
export class RegisterEffect {
  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerAction),
      switchMap(({ request }) => {
        return this.authService.register(request).pipe(
          map((currentUser: IUser) => {
            console.log(currentUser)
            this.tokenService.set(currentUser.token)
            return registerSuccessAction({ currentUser })
          }),
          catchError(( error : HttpErrorResponse) => {
            return of(
              registerFailureAction({ error: error })
            )
          })
        )
      })
    )
  )

  redirectAfterSubmit$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(registerSuccessAction),
        tap(() => {
          this.router.navigateByUrl('/')
        })
      ),
    {dispatch: false}
  )

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
    private tokenService: TokenService
  ) {}
}
