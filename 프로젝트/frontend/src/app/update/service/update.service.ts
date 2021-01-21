import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { environment } from 'src/environments/environment';
import { IPostResponse } from '../types/response.interface';
import { IPost } from 'src/app/post/types/post.interface';
import { IUpdateRequest } from '../types/request.interface';

@Injectable()
export class UpdateService {
  constructor(private http: HttpClient) {}

  // 업데이트
  update(data : IUpdateRequest ) : Observable<IPost> {
    const url = environment.url + `/posts/${data.id}`
    return this.http
      .patch<IPostResponse>(url, data)
      .pipe(
        map((res : IPostResponse) => res.post )
      )
  }
}

