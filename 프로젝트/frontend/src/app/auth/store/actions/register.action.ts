import { createAction, props } from '@ngrx/store'
import { IError } from 'src/app/shared/types/error.interface'
import { IResponse } from '../../types/response.interface'
import { IUser } from '../../types/user.interface'
import { ActionTypes } from './actionTypes'

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<{ request : IResponse }>()
)
export const registerSuccessAction = createAction(
  ActionTypes.REGISTER_SUCCESS,
  props<{ currentUser: IUser }>()
)
export const registerFailureAction = createAction(
  ActionTypes.REGISTER_FAILURE,
  props<{ error: IError }>()
)
