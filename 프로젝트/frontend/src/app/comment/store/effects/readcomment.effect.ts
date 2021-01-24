import { Injectable } from '@angular/core'
import { createEffect, Actions, ofType } from '@ngrx/effects'
import { map, catchError, switchMap } from 'rxjs/operators'
import { of } from 'rxjs'
import { HttpErrorResponse } from '@angular/common/http'
import { ReadCommentService } from '../../service/readcomment.service'
import { readcommentAction, readcommentFailureAction, readcommentSuccessAction } from '../actions/readcomment.actions'
import { IComment } from '../../types/comment.interface'

@Injectable()
export class ReadCommentEffect {
  readcomment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(readcommentAction),
      switchMap(({ id }) => {
        return this.readcommentService.readcomment(id).pipe(
          map(( comments: IComment[] ) => {
            return readcommentSuccessAction({ comments })
          }),
          catchError(( errors : HttpErrorResponse) => {
            return of(
              readcommentFailureAction({ errors: errors })
            )
          })
        )
      })
    )
  )
  constructor(
    private actions$: Actions,
    private readcommentService: ReadCommentService,
  ) {}
}
