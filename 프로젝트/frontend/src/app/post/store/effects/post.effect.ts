import {Injectable} from '@angular/core'
import {createEffect, Actions, ofType} from '@ngrx/effects'
import {map, catchError, switchMap, tap } from 'rxjs/operators'
import {of} from 'rxjs'
import { HttpErrorResponse } from '@angular/common/http'
import { postAction, postFailureAction, postSuccessAction } from '../actions/post.actions'
import { PostService } from '../../service/post.service'
import { IPost } from '../../types/post.interface'

@Injectable()
export class PostEffect {
  post$ = createEffect(() =>
    this.actions$.pipe(
      ofType(postAction),
      switchMap(({ id }) => {
        return this.postService.post(id).pipe(
          map(( post: IPost ) => {
            return postSuccessAction({ post })
          }),
          catchError(( errors : HttpErrorResponse) => {
            return of(
              postFailureAction({ errors: errors })
            )
          })
        )
      })
    )
  )
  constructor(
    private actions$: Actions,
    private postService: PostService,
  ) {}
}
