import {Injectable} from '@angular/core'
import {createEffect, Actions, ofType} from '@ngrx/effects'
import {map, catchError, switchMap, tap } from 'rxjs/operators'
import {of} from 'rxjs'
import { HttpErrorResponse } from '@angular/common/http'
import { Router } from '@angular/router'
import { TokenService } from 'src/app/shared/service/token.service'

import { updateAction, updateFailureAction, updateSuccessAction } from '../actions/update.action'
import { UpdateService } from '../../service/update.service'
import { IPost } from 'src/app/post/types/post.interface'

@Injectable()
export class UpdateEffect {
  update$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateAction),
      switchMap(( { request } ) => {
        const token = this.tokenService.get()
        if (!token) {
          return of(updateFailureAction({ error: null }))
        }
        return this.updateService.update(request).pipe(
          map((post: IPost) => {
            this.router.navigateByUrl(`/post/${post._id}`)
            return updateSuccessAction({ post })
          }),
          catchError(( error : HttpErrorResponse ) => {
            return of(updateFailureAction({ error: error }))
          })
        )
      })
    )
  )

  constructor(
    private actions$: Actions,
    private updateService: UpdateService,
    private router: Router,
    private tokenService: TokenService
  ) {}
}
