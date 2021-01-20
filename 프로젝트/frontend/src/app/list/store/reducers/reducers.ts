import { createReducer, on, Action } from '@ngrx/store';
import { IListState } from '../../types/list.interface';
import { listAction, listFailureAction, listSuccessAction } from '../actions/list.actions';

const initialState : IListState = {
  lists: null,
  validationErrors: null
}

const list = createReducer(
  initialState,
  on(
    listAction,
    (state) : IListState => ({
      ...state,
      validationErrors : null
    })
  ),
  on(
    listSuccessAction,
    (state, action): IListState => ({
      ...state,
      lists: action.lists
    })
  ),
  on(
    listFailureAction,
    (state, action): IListState => ({
      ...state,
      validationErrors: action.errors,
    })
  ),

)

export function reducers(state: IListState, action: Action){
  return list(state, action)
}
