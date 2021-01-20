import {Injectable} from '@angular/core'
import {createEffect, Actions, ofType} from '@ngrx/effects'
import {map, catchError, switchMap, tap } from 'rxjs/operators'
import {of} from 'rxjs'
import { HttpErrorResponse } from '@angular/common/http'
import { Router } from '@angular/router'
import { listAction, listFailureAction, listSuccessAction } from '../actions/list.actions'
import { ListService } from '../../service/list.service'
import { IPosts } from '../../types/posts.interface'

@Injectable()
export class ListEffect {
  list$ = createEffect(() =>
    this.actions$.pipe(
      ofType(listAction),
      switchMap(() => {
        return this.listService.list().pipe(
          map((lists:IPosts) => {
            return listSuccessAction({ lists })
          }),
          catchError(( errors : HttpErrorResponse) => {
            return of(
              listFailureAction({ errors: errors })
            )
          })
        )
      })
    )
  )

  redirectAfterSubmit$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(listSuccessAction),
        tap(() => {
          this.router.navigateByUrl('/')
        })
      ),
    { dispatch: false }
  )

  constructor(
    private actions$: Actions,
    private listService: ListService,
    private router: Router,
  ) {}
}
