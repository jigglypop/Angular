import { IPost } from './post.interface';

export interface IResponse {
  posts: IPost[]
  last: string
}
