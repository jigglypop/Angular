import { IUser } from 'src/app/auth/types/user.interface';
import { IRecomment } from './recomment.interface';

export interface IComment {
  user: IUser
  _id: number
  content: string
  createdAt: Date
  recomment: IRecomment[]
}
