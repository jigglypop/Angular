import { createAction, props } from '@ngrx/store'
import { IError } from 'src/app/shared/types/error.interface'
import { IComment } from '../../types/comment.interface'
import { ActionTypes } from './actionTypes'

// 댓글 쓰기
export const writerecommentAction = createAction(
  ActionTypes.WRITERECOMMENT,
  props<{ recontent : string , postId: string, commentId: string }>()
)
export const writerecommentSuccessAction = createAction(
  ActionTypes.WRITERECOMMENT_SUCCESS,
  props<{ comments: IComment[] }>()
)
export const writerecommentFailureAction = createAction(
  ActionTypes.WRITERECOMMENT_FAILURE,
  props<{ errors: IError }>()
)
