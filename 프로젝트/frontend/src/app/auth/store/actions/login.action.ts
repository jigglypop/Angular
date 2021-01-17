import { createAction, props } from '@ngrx/store'
import { IError } from 'src/app/shared/types/error.interface'
import { IResponse } from '../../types/response.interface'
import { IUser } from '../../types/user.interface'
import { ActionTypes } from './actionTypes'

export const loginAction = createAction(
  ActionTypes.LOGIN,
  props<{ request : IResponse }>()
)
export const loginSuccessAction = createAction(
  ActionTypes.LOGIN_SUCCESS,
  props<{ currentUser: IUser }>()
)
export const loginFailureAction = createAction(
  ActionTypes.LOGIN_FAILURE,
  props<{ error: IError }>()
)
