import { createReducer, on, Action } from '@ngrx/store';
import { IUpdateReduceState } from '../../types/updatereduce.interface';
import { updateAction, updateFailureAction, updateSuccessAction } from '../actions/update.action';

const initialState :  IUpdateReduceState = {
  post: null,
  isSubmitting : false,
  validationErrors: null
}

const update = createReducer(
  initialState,
  // 업데이트
  on(
    updateAction,
    (state) : IUpdateReduceState => ({
      ...state,
      isSubmitting : true,
      validationErrors : null
    })
  ),
  on(
    updateSuccessAction,
    (state, action): IUpdateReduceState  => ({
      ...state,
      isSubmitting: false,
      post: action.post
    })
  ),
  on(
    updateFailureAction,
    (state, action): IUpdateReduceState => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.error,
    })
  ),
)

export function reducers(state: IUpdateReduceState, action: Action){
  return update(state, action)
}
