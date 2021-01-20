import { IError } from 'src/app/shared/types/error.interface';
import { IPosts } from './posts.interface';

export interface IListState {
  lists: IPosts | null
  validationErrors: IError | null
}
