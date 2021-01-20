import { createAction, props } from '@ngrx/store'
import { IError } from 'src/app/shared/types/error.interface'
import { IPosts } from '../../types/posts.interface'
import { ActionTypes } from './actionTypes'

// 체크
export const listAction = createAction(
  ActionTypes.LIST
)
export const listSuccessAction = createAction(
  ActionTypes.LIST_SUCCESS,
  props<{ lists: IPosts }>()
)
export const listFailureAction = createAction(
  ActionTypes.LIST_FAILURE,
  props<{ errors: IError }>()

)
