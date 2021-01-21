import { IAuthState } from 'src/app/auth/types/auth.interface';
import { IListState } from 'src/app/list/types/list.interface';
import { IPostReduceState } from 'src/app/post/types/postreduce.interface';
import { IUpdateReduceState } from 'src/app/update/types/updatereduce.interface';
import { IWriteReduceState } from 'src/app/write/types/writereduce.interface';

export interface IAppState {
  auth: IAuthState
  list: IListState
  post: IPostReduceState
  write: IWriteReduceState
  update: IUpdateReduceState
}
