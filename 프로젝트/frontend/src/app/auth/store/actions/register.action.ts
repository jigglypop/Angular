import { createAction, props } from '@ngrx/store'
import { IRegister } from '../../types/register.interface'
import { ActionTypes } from '../actionTypes'

export const registerAction = createAction(
    ActionTypes.REGISTER,
    props<IRegister>()
)
