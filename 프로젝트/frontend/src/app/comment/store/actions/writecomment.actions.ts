import { createAction, props } from '@ngrx/store'
import { IError } from 'src/app/shared/types/error.interface'
import { IComment } from '../../types/comment.interface'
import { ActionTypes } from './actionTypes'

// 댓글 쓰기
export const writecommentAction = createAction(
  ActionTypes.WRITECOMMENT,
  props<{ content : string , id: string }>()
)
export const writecommentSuccessAction = createAction(
  ActionTypes.WRITECOMMENT_SUCCESS,
  props<{ comments: IComment[] }>()
)
export const writecommentFailureAction = createAction(
  ActionTypes.WRITECOMMENT_FAILURE,
  props<{ errors: IError }>()
)
