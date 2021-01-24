import { Injectable } from '@angular/core'
import { createEffect, Actions, ofType } from '@ngrx/effects'
import { map, catchError, switchMap } from 'rxjs/operators'
import { of } from 'rxjs'
import { HttpErrorResponse } from '@angular/common/http'

import { IComment } from '../../types/comment.interface'
import { TokenService } from 'src/app/shared/service/token.service'
import { writerecommentAction, writerecommentFailureAction, writerecommentSuccessAction } from '../actions/writerecomment.actions'
import { WriteReCommentService } from '../../service/writerecomment.service'

@Injectable()
export class WriteReCommentEffect {
  writerecomment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(writerecommentAction),
      switchMap(({ recontent, postId, commentId }) => {
        const token = this.tokenService.get()
        if (!token) {
          return of(writerecommentFailureAction({ errors: null }))
        }
        return this.writerecommentService.writerecomment(recontent, postId, commentId).pipe(
          map(( comments: IComment[] ) => {
            return writerecommentSuccessAction( { comments })
          }),
          catchError(( errors : HttpErrorResponse) => {
            return of(
              writerecommentFailureAction({ errors: errors })
            )
          })
        )
      })
    )
  )


  constructor(
    private actions$: Actions,
    private writerecommentService: WriteReCommentService,
    private tokenService : TokenService
  ) {}
}
