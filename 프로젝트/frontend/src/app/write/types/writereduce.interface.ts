import { IError } from 'src/app/shared/types/error.interface';
import { IPost } from './post.interface';

export interface IWriteReduceState {
  post: IPost | null
  isSubmitting: boolean
  validationErrors: IError | null
}
