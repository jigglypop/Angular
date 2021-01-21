import { createAction, props } from '@ngrx/store'
import { IError } from 'src/app/shared/types/error.interface'
import { IPost } from '../../types/post.interface'
import { ActionTypes } from './actionTypes'

export const writeAction = createAction(
  ActionTypes.WRITE,
  props<{ request : any }>()
)
export const writeSuccessAction = createAction(
  ActionTypes.WRITE_SUCCESS,
  props<{ post: IPost }>()
)
export const writeFailureAction = createAction(
  ActionTypes.WRITE_FAILURE,
  props<{ error: IError }>()
)
