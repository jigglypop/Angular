import { createReducer, on, Action } from '@ngrx/store';
import { IAuthState } from "../../types/auth.interface";
import { checkAction, checkFailureAction, checkSuccessAction } from '../actions/check.action';
import { loginAction, loginFailureAction, loginSuccessAction } from '../actions/login.action';
import { logoutAction } from '../actions/logout.action';
import { registerAction, registerFailureAction, registerSuccessAction } from '../actions/register.action';

const initialState : IAuthState = {
  isSubmitting: false,
  currentUser: null,
  validationErrors: null,
  isLoggedIn: null
}

const auth = createReducer(
  initialState,
  // register 부분
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
  ),
  // login 부분
  on(
    loginAction,
    (state) : IAuthState => ({
      ...state,
      isSubmitting : true,
      validationErrors : null
    })
  ),
  on(
    loginSuccessAction,
    (state, action): IAuthState => ({
      ...state,
      isSubmitting: false,
      isLoggedIn: true,
      currentUser: action.currentUser
    })
  ),
  on(
    loginFailureAction,
    (state, action): IAuthState => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.error,
    })
  ),
  // check 부분
  on(
    checkAction,
    (state) : IAuthState => ({
      ...state,
      isSubmitting : true,
      validationErrors : null
    })
  ),
  on(
    checkSuccessAction,
    (state, action): IAuthState => ({
      ...state,
      isSubmitting: false,
      isLoggedIn: true,
      currentUser: action.currentUser
    })
  ),
  on(
    checkFailureAction,
    (state, action): IAuthState => ({
      ...state,
      isSubmitting: false,
    })
  ),

  // logout 부분
  on(
    logoutAction,
    (state) : IAuthState => ({
      ...state,
      isSubmitting : false,
      isLoggedIn: null,
      currentUser: null,
      validationErrors : null
    })
  )
)

export function reducers(state: IAuthState, action: Action){
  return auth(state, action)
}
