import { IError } from 'src/app/shared/types/error.interface';
import { IPost } from './post.interface';

export interface IPostReduceState {
  post: IPost | null
  validationErrors: IError | null
}
