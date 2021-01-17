import {Injectable} from '@angular/core'
import {createEffect, Actions, ofType} from '@ngrx/effects'
import {map, catchError, switchMap, tap } from 'rxjs/operators'
import {of} from 'rxjs'
import { AuthService } from '../../service/auth.service'
import { TokenService } from 'src/app/shared/service/token.service'
import { checkAction, checkFailureAction, checkSuccessAction } from '../actions/check.action'
import { IUser } from '../../types/user.interface'

@Injectable()
export class CheckEffect {
  check$ = createEffect(() =>
    this.actions$.pipe(
      ofType(checkAction),
      switchMap(() => {
        const token = this.tokenService.get()
        if (!token) {
          return of(checkFailureAction())
        }
        return this.authService.check().pipe(
          map((currentUser: IUser) => {
            return checkSuccessAction({ currentUser })
          }),
          catchError(() => {
            return of(checkFailureAction())
          })
        )
      })
    )
  )

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private tokenService: TokenService
  ) {}
}
