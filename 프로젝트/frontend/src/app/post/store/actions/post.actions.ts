import { createAction, props } from '@ngrx/store'
import { IError } from 'src/app/shared/types/error.interface'
import { IPost } from '../../types/post.interface'
import { ActionTypes } from './actionTypes'

// 포스트
export const postAction = createAction(
  ActionTypes.POST,
  props<{ id: string }>()
)
export const postSuccessAction = createAction(
  ActionTypes.POST_SUCCESS,
  props<{ post: IPost }>()
)
export const postFailureAction = createAction(
  ActionTypes.POST_FAILURE,
  props<{ errors: IError }>()

)
