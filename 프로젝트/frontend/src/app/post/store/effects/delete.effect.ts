import { Injectable } from '@angular/core'
import { createEffect, Actions, ofType } from '@ngrx/effects'
import { map, catchError, switchMap, tap } from 'rxjs/operators'
import { of } from 'rxjs'
import { HttpErrorResponse } from '@angular/common/http'
import { DeleteService } from '../../service/delete.service'
import { deleteAction, deleteFailureAction, deleteSuccessAction } from '../actions/delete.actions'
import { Router } from '@angular/router'

@Injectable()
export class DeleteEffect {
  delete$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteAction),
      switchMap(({ id }) => {
        return this.deleteService.delete(id).pipe(
          map(() => {
            return deleteSuccessAction()
          }),
          catchError(( errors : HttpErrorResponse) => {
            return of(
              deleteFailureAction({ errors: errors })
            )
          })
        )
      })
    )
  )
  redirectAfterSubmit$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(deleteSuccessAction),
        tap(() => {
          this.router.navigateByUrl('/')
        })
      ),
    {dispatch: false}
  )

  constructor(
    private actions$: Actions,
    private deleteService: DeleteService,
    private router : Router
  ) {}
}
