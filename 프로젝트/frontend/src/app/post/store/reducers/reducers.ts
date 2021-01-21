import { createReducer, on, Action } from '@ngrx/store';
import { IPostReduceState } from '../../types/postreduce.interface';
import { deleteAction, deleteFailureAction, deleteSuccessAction } from '../actions/delete.actions';
import { postAction, postFailureAction, postSuccessAction } from '../actions/post.actions';

const initialState : IPostReduceState = {
  post: null,
  validationErrors: null
}

const post = createReducer(
  initialState,
  // 포스트
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

  // 삭제
  on(
    deleteAction,
    (state) : IPostReduceState => ({
      ...state,
      validationErrors : null
    })
  ),
  on(
    deleteSuccessAction,
    (state, action): IPostReduceState => ({
      ...state,
    })
  ),
  on(
    deleteFailureAction,
    (state, action): IPostReduceState => ({
      ...state,
      validationErrors: action.errors,
    })
  ),

)

export function reducers(state: IPostReduceState, action: Action){
  return post(state, action)
}
