import { IPost } from 'src/app/post/types/post.interface';
import { IError } from 'src/app/shared/types/error.interface';

export interface IUpdateReduceState {
  post: IPost | null
  isSubmitting: boolean
  validationErrors: IError | null
}
