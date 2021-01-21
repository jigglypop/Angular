import { createAction, props } from '@ngrx/store'
import { IError } from 'src/app/shared/types/error.interface'
import { IPost } from '../../types/post.interface'
import { ActionTypes } from './actionTypes'

// 삭제
export const deleteAction = createAction(
  ActionTypes.DELETE,
  props<{ id: string }>()
)
export const deleteSuccessAction = createAction(
  ActionTypes.DELETE_SUCCESS,
)
export const deleteFailureAction = createAction(
  ActionTypes.DELETE_FAILURE,
  props<{ errors: IError }>()
)
