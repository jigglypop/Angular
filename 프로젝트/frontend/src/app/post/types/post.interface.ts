import { IUser } from 'src/app/auth/types/user.interface';

export interface IPost {
  _id: number
  title: string
  content: string
  publishedDate: string
  createdAt: string
  user: IUser
  tags: Object | null
}
