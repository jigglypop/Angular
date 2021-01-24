import { createAction, props } from '@ngrx/store'
import { IError } from 'src/app/shared/types/error.interface'
import { IComment } from '../../types/comment.interface'
import { ActionTypes } from './actionTypes'

// 대댓글 삭제
export const deleterecommentAction = createAction(
  ActionTypes.DELETERECOMMENT,
  props<{ postId : string, commentId: string , recommentId: string }>()
)
export const deleterecommentSuccessAction = createAction(
  ActionTypes.DELETERECOMMENT_SUCCESS,
  props<{ comments: IComment[] }>()
)
export const deleterecommentFailureAction = createAction(
  ActionTypes.DELETERECOMMENT_FAILURE,
  props<{ errors: IError }>()
)
