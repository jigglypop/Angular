import { createAction, props } from '@ngrx/store'
import { IError } from 'src/app/shared/types/error.interface'
import { IComment } from '../../types/comment.interface'
import { ActionTypes } from './actionTypes'

// 코멘트 읽기
export const readcommentAction = createAction(
  ActionTypes.READCOMMENT,
  props<{ id : string }>()
)
export const readcommentSuccessAction = createAction(
  ActionTypes.READCOMMENT_SUCCESS,
  props<{ comments: IComment[] }>()
)
export const readcommentFailureAction = createAction(
  ActionTypes.READCOMMENT_FAILURE,
  props<{ errors: IError }>()
)

