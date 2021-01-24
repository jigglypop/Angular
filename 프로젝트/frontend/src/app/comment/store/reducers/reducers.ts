import { createReducer, on, Action } from '@ngrx/store';
import { ICommentReduceState } from '../../types/commentreduce.interface';
import { deletecommentAction, deletecommentSuccessAction, deletecommentFailureAction } from '../actions/deletecomment.actions';
import { deleterecommentAction, deleterecommentFailureAction, deleterecommentSuccessAction } from '../actions/deleterecomment.actions';
import { readcommentAction, readcommentFailureAction, readcommentSuccessAction } from '../actions/readcomment.actions';
import { writecommentAction, writecommentFailureAction, writecommentSuccessAction } from '../actions/writecomment.actions';
import { writerecommentAction, writerecommentFailureAction, writerecommentSuccessAction } from '../actions/writerecomment.actions';

const initialState : ICommentReduceState = {
  content : null,
  recontent : null,
  comments: null,
  validationErrors: null
}

const comment = createReducer(
  initialState,
  // 코멘트
  on(
    readcommentAction,
    (state) : ICommentReduceState => ({
      ...state,
      validationErrors : null
    })
  ),
  on(
    readcommentSuccessAction,
    (state, action): ICommentReduceState => ({
      ...state,
      comments: action.comments
    })
  ),
  on(
    readcommentFailureAction,
    (state, action): ICommentReduceState => ({
      ...state,
      validationErrors: action.errors,
    })
  ),

  // 댓글 등록
  on(
    writecommentAction,
    (state, action) : ICommentReduceState => ({
      ...state,
      content : action.content,
      validationErrors : null
    })
  ),
  on(
    writecommentSuccessAction,
    (state, action): ICommentReduceState => ({
      ...state,
      comments : action.comments
    })
  ),
  on(
    writecommentFailureAction,
    (state, action): ICommentReduceState => ({
      ...state,
      validationErrors: action.errors,
    })
  ),
  // 대댓글 등록
  on(
    writerecommentAction,
    (state, action) : ICommentReduceState => ({
      ...state,
      recontent : action.recontent,
      validationErrors : null
    })
  ),
  on(
    writerecommentSuccessAction,
    (state, action): ICommentReduceState => ({
      ...state,
      comments : action.comments
    })
  ),
  on(
    writerecommentFailureAction,
    (state, action): ICommentReduceState => ({
      ...state,
      validationErrors: action.errors,
    })
  ),
  // 댓글 삭제
  on(
    deletecommentAction,
    (state) : ICommentReduceState => ({
      ...state,
      validationErrors : null
    })
  ),
  on(
    deletecommentSuccessAction,
    (state, action): ICommentReduceState => ({
      ...state,
      comments : action.comments
    })
  ),
  on(
    deletecommentFailureAction,
    (state, action): ICommentReduceState => ({
      ...state,
      validationErrors: action.errors,
    })
  ),


  // 대댓글 삭제
  on(
    deleterecommentAction,
    (state) : ICommentReduceState => ({
      ...state,
      validationErrors : null
    })
  ),
  on(
    deleterecommentSuccessAction,
    (state, action): ICommentReduceState => ({
      ...state,
      comments : action.comments
    })
  ),
  on(
    deleterecommentFailureAction,
    (state, action): ICommentReduceState => ({
      ...state,
      validationErrors: action.errors,
    })
  ),

)

export function reducers(state: ICommentReduceState, action: Action){
  return comment(state, action)
}
