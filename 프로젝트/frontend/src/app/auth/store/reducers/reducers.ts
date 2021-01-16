import { createReducer, on, Action } from '@ngrx/store';
import { IAuthState } from "../../types/auth.interface";
import { registerAction, registerFailureAction, registerSuccessAction } from '../actions/register.action';

const initialState : IAuthState = {
  isSubmitting: false,
  currentUser: null,
  validationErrors: null,
  isLoggedIn: null
}

const auth = createReducer(
  initialState,
  on(
    registerAction,
    (state) : IAuthState => ({
      ...state,
      isSubmitting : true,
      validationErrors : null
    })
  ),
  on(
    registerSuccessAction,
    (state, action): IAuthState => ({
      ...state,
      isSubmitting: false,
      isLoggedIn: true,
      currentUser: action.currentUser
    })
  ),
  on(
    registerFailureAction,
    (state, action): IAuthState => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.error,
    })
  )
)

export function reducers(state: IAuthState, action: Action){
  return auth(state, action)
}
