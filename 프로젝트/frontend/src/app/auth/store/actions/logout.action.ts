import { createAction } from '@ngrx/store'
import { ActionTypes } from './actionTypes'

// 로그아웃
export const logoutAction = createAction(
  ActionTypes.LOGOUT
)
