import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { environment } from 'src/environments/environment';
import { IPostResponse } from '../types/response.interface';
import { IPost } from '../types/post.interface';

@Injectable()
export class PostService {
  constructor(private http: HttpClient) {}
  // 포스트
  post(id) : Observable<IPost> {
    const url = environment.url + `/posts/${id}`
    return this.http
      .get<IPostResponse>(url)
      .pipe(
        map((res : IPostResponse) => res.post )
      )
  }
}

