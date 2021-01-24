import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { environment } from 'src/environments/environment';
import { ICommentResponse } from '../types/response.interface';
import { IComment } from '../types/comment.interface';

@Injectable()
export class WriteReCommentService {
  constructor(private http: HttpClient) {}
  // 대댓글 쓰기
  writerecomment(recontent : string, postId : string, commentId : string ) : Observable<IComment[]> {
    const url = environment.url + `/recomment/${postId}/${commentId}`
    return this.http
      .post<ICommentResponse>(url, {
        recomments : {
          content : recontent
        }
      })
      .pipe(
        map((res : ICommentResponse) => res.comments )
      )
  }
}

