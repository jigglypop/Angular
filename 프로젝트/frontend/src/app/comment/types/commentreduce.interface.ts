import { IError } from 'src/app/shared/types/error.interface';
import { IComment } from './comment.interface';

export interface ICommentReduceState {
  content? :  string
  recontent? :  string
  comments : IComment[]
  validationErrors: IError | null
}
