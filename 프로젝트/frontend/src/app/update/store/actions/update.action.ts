import { createAction, props } from '@ngrx/store'
import { IPost } from 'src/app/post/types/post.interface'
import { IError } from 'src/app/shared/types/error.interface'
import { ActionTypes } from './actionTypes'

// 업데이트
export const updateAction = createAction(
  ActionTypes.UPDATE,
  props<{ request : any }>()
)
export const updateSuccessAction = createAction(
  ActionTypes.UPDATE_SUCCESS,
  props<{ post: IPost }>()
)
export const updateFailureAction = createAction(
  ActionTypes.UPDATE_FAILURE,
  props<{ error: IError }>()
)
