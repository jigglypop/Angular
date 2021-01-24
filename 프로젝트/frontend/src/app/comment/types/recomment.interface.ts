import { IUser } from 'src/app/auth/types/user.interface';

export interface IRecomment {
  user: IUser
  _id: number
  content: string
  createdAt: Date
}
