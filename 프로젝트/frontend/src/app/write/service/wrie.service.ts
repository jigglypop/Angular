import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { environment } from 'src/environments/environment';
import { IPostResponse } from '../types/response.interface';
import { IPost } from '../types/post.interface';

@Injectable()
export class WriteService {
  constructor(private http: HttpClient) {}
  // 글쓰기
  write(data : IPostResponse) : Observable<IPost> {
    const url = environment.url + '/posts/'
    return this.http
      .post<IPostResponse>(url, data)
      .pipe(
        map((res : IPostResponse) => res.post )
      )
  }
}

