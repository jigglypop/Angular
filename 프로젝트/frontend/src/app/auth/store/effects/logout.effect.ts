import {Injectable} from '@angular/core'
import {createEffect, Actions, ofType} from '@ngrx/effects'
import { tap } from 'rxjs/operators'
import { Router } from '@angular/router'
import { TokenService } from 'src/app/shared/service/token.service'
import { logoutAction } from '../actions/logout.action'

@Injectable()
export class LogoutEffect {
  redirectAfterSubmit$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(logoutAction),
        tap(() => {
          this.tokenService.clear()
          this.router.navigateByUrl('/')
        })
      ),
    { dispatch: false }
  )
  constructor(
    private actions$: Actions,
    private router: Router,
    private tokenService: TokenService
  ) {}
}
