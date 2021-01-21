import {Injectable} from '@angular/core'
import {createEffect, Actions, ofType} from '@ngrx/effects'
import {map, catchError, switchMap, tap } from 'rxjs/operators'
import {of} from 'rxjs'
import { HttpErrorResponse } from '@angular/common/http'
import { Router } from '@angular/router'
import { TokenService } from 'src/app/shared/service/token.service'
import { writeAction, writeFailureAction, writeSuccessAction } from '../actions/write.action'
import { WriteService } from '../../service/wrie.service'
import { IPost } from '../../types/post.interface'

@Injectable()
export class WriteEffect {
  write$ = createEffect(() =>
    this.actions$.pipe(
      ofType(writeAction),
      switchMap(( { request } ) => {
        const token = this.tokenService.get()
        if (!token) {
          return of(writeFailureAction({ error: null }))
        }
        return this.writeService.write(request).pipe(
          map((post: IPost) => {
            this.router.navigateByUrl(`/post/${post._id}`)
            return writeSuccessAction({ post })
          }),
          catchError(( error : HttpErrorResponse ) => {
            return of(writeFailureAction({ error: error }))
          })
        )
      })
    )
  )

  constructor(
    private actions$: Actions,
    private writeService: WriteService,
    private router: Router,
    private tokenService: TokenService
  ) {}
}
