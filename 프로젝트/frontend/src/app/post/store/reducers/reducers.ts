import { createReducer, on, Action } from '@ngrx/store';
import { IPostReduceState } from '../../types/postreduce.interface';
import { postAction, postFailureAction, postSuccessAction } from '../actions/post.actions';

const initialState : IPostReduceState = {
  post: null,
  validationErrors: null
}

const post = createReducer(
  initialState,
  on(
    postAction,
    (state) : IPostReduceState => ({
      ...state,
      validationErrors : null
    })
  ),
  on(
    postSuccessAction,
    (state, action): IPostReduceState => ({
      ...state,
      post: action.post
    })
  ),
  on(
    postFailureAction,
    (state, action): IPostReduceState => ({
      ...state,
      validationErrors: action.errors,
    })
  ),

)

export function reducers(state: IPostReduceState, action: Action){
  return post(state, action)
}
