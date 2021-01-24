import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { environment } from 'src/environments/environment';
import { ICommentDeleteResponse } from '../types/commentdeleteresponse.interface';
import { IComment } from '../types/comment.interface';

@Injectable()
export class DeleteReCommentService {
  constructor(private http: HttpClient) {}
  // 대댓글 삭제
  deleterecomment(postId, commentId, recommentId) : Observable<IComment[]> {
    const url = environment.url + `/recomment/${postId}/${commentId}/${recommentId}`
    return this.http
      .delete<ICommentDeleteResponse>(url)
      .pipe(
        map((res : ICommentDeleteResponse) => res.comments )
      )
  }
}

