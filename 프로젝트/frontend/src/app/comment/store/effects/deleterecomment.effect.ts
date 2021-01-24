import { Injectable } from '@angular/core'
import { createEffect, Actions, ofType } from '@ngrx/effects'
import { map, catchError, switchMap } from 'rxjs/operators'
import { of } from 'rxjs'
import { HttpErrorResponse } from '@angular/common/http'
import { IComment } from '../../types/comment.interface'
import { deleterecommentAction, deleterecommentFailureAction, deleterecommentSuccessAction } from '../actions/deleterecomment.actions'
import { DeleteReCommentService } from '../../service/deleterecomment.service'

@Injectable()
export class DeleteReCommentEffect {
  deleterecomment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleterecommentAction),
      switchMap(({ postId, commentId, recommentId }) => {
        return this.deleterecommentService.deleterecomment(postId, commentId, recommentId ).pipe(
          map(( comments: IComment[] ) => {
            return deleterecommentSuccessAction( { comments })
          }),
          catchError(( errors : HttpErrorResponse) => {
            return of(
              deleterecommentFailureAction({ errors: errors })
            )
          })
        )
      })
    )
  )


  constructor(
    private actions$: Actions,
    private deleterecommentService: DeleteReCommentService,
  ) {}
}
