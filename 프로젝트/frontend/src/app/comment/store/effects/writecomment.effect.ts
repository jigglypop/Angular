import { Injectable } from '@angular/core'
import { createEffect, Actions, ofType } from '@ngrx/effects'
import { map, catchError, switchMap } from 'rxjs/operators'
import { of } from 'rxjs'
import { HttpErrorResponse } from '@angular/common/http'

import { IComment } from '../../types/comment.interface'
import { TokenService } from 'src/app/shared/service/token.service'
import { WriteCommentService } from '../../service/writecomment.service'
import { writecommentAction, writecommentFailureAction, writecommentSuccessAction } from '../actions/writecomment.actions'

@Injectable()
export class WriteCommentEffect {
  writecomment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(writecommentAction),
      switchMap(({ content, id }) => {
        const token = this.tokenService.get()
        if (!token) {
          return of(writecommentFailureAction({ errors: null }))
        }
        return this.writecommentService.writecomment(content, id).pipe(
          map(( comments: IComment[] ) => {
            return writecommentSuccessAction( { comments })
          }),
          catchError(( errors : HttpErrorResponse) => {
            return of(
              writecommentFailureAction({ errors: errors })
            )
          })
        )
      })
    )
  )


  constructor(
    private actions$: Actions,
    private writecommentService: WriteCommentService,
    private tokenService : TokenService
  ) {}
}
