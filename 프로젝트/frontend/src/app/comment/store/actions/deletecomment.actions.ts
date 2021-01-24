import { createAction, props } from '@ngrx/store'
import { IError } from 'src/app/shared/types/error.interface'
import { IComment } from '../../types/comment.interface'
import { ActionTypes } from './actionTypes'

// 삭제
export const deletecommentAction = createAction(
  ActionTypes.DELETECOMMENT,
  props<{ postId : string, id: string }>()
)
export const deletecommentSuccessAction = createAction(
  ActionTypes.DELETECOMMENT_SUCCESS,
  props<{ comments: IComment[] }>()
)
export const deletecommentFailureAction = createAction(
  ActionTypes.DELETECOMMENT_FAILURE,
  props<{ errors: IError }>()
)
