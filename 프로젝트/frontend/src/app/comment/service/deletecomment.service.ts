import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { environment } from 'src/environments/environment';
import { ICommentDeleteResponse } from '../types/commentdeleteresponse.interface';
import { IComment } from '../types/comment.interface';

@Injectable()
export class DeleteCommentService {
  constructor(private http: HttpClient) {}
  // 삭제
  deletecomment(postId, id) : Observable<IComment[]> {
    const url = environment.url + `/comment/${postId}/${id}`
    return this.http
      .delete<ICommentDeleteResponse>(url)
      .pipe(
        map((res : ICommentDeleteResponse) => res.comments )
      )
  }
}

