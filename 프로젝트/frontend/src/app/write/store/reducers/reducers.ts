import { createReducer, on, Action } from '@ngrx/store';
import { IWriteReduceState } from '../../types/writereduce.interface';
import { writeAction, writeFailureAction, writeSuccessAction } from '../actions/write.action';

const initialState :  IWriteReduceState = {
  post: null,
  isSubmitting : false,
  validationErrors: null
}

const write = createReducer(
  initialState,
  on(
    writeAction,
    (state) : IWriteReduceState => ({
      ...state,
      isSubmitting : true,
      validationErrors : null
    })
  ),
  on(
    writeSuccessAction,
    (state, action): IWriteReduceState  => ({
      ...state,
      isSubmitting: false,
      post: action.post
    })
  ),
  on(
    writeFailureAction,
    (state, action): IWriteReduceState => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.error,
    })
  ),
)

export function reducers(state: IWriteReduceState, action: Action){
  return write(state, action)
}
