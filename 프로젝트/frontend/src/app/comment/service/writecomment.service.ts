import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { environment } from 'src/environments/environment';
import { ICommentResponse } from '../types/response.interface';
import { IComment } from '../types/comment.interface';

@Injectable()
export class WriteCommentService {
  constructor(private http: HttpClient) {}
  // 댓글쓰기
  writecomment(content : string, id : string) : Observable<IComment[]> {
    const url = environment.url + `/comment/${id}`
    return this.http
      .post<ICommentResponse>(url, {
        comments : {
          content : content
        }
      })
      .pipe(
        map((res : ICommentResponse) => res.comments )
      )
  }
}

