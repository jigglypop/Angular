import { IPost } from 'src/app/post/types/post.interface';

export interface IListResponse {
  posts: IPost[]
  last: string
}
