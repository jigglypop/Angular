import { createAction, props } from '@ngrx/store'
import { IUser } from '../../types/user.interface'
import { ActionTypes } from './actionTypes'

// 체크
export const checkAction = createAction(
  ActionTypes.CHECK
)
export const checkSuccessAction = createAction(
  ActionTypes.CHECK_SUCCESS,
  props<{ currentUser: IUser }>()
)
export const checkFailureAction = createAction(
  ActionTypes.CHECK_FAILURE,
)
