import { Injectable } from '@angular/core'
import { createEffect, Actions, ofType } from '@ngrx/effects'
import { map, catchError, switchMap } from 'rxjs/operators'
import { of } from 'rxjs'
import { HttpErrorResponse } from '@angular/common/http'
import { deletecommentAction, deletecommentFailureAction, deletecommentSuccessAction } from '../actions/deletecomment.actions'
import { DeleteCommentService } from '../../service/deletecomment.service'
import { IComment } from '../../types/comment.interface'

@Injectable()
export class DeleteCommentEffect {
  deletecomment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deletecommentAction),
      switchMap(({ postId, id }) => {
        return this.deletecommentService.deletecomment(postId, id).pipe(
          map(( comments: IComment[] ) => {
            return deletecommentSuccessAction( { comments })
          }),
          catchError(( errors : HttpErrorResponse) => {
            return of(
              deletecommentFailureAction({ errors: errors })
            )
          })
        )
      })
    )
  )


  constructor(
    private actions$: Actions,
    private deletecommentService: DeleteCommentService,
  ) {}
}
