import { IPost } from 'src/app/post/types/post.interface';
import { IError } from 'src/app/shared/types/error.interface';

export interface IBeforeReduceState {
  post: IPost | null
  validationErrors: IError | null
}
