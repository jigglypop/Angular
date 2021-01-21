import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { environment } from 'src/environments/environment';
import { IDeleteResponse } from '../types/deleteresponse.interface';

@Injectable()
export class DeleteService {
  constructor(private http: HttpClient) {}
  // 삭제
  delete(id) : Observable<string> {
    const url = environment.url + `/posts/${id}`
    return this.http
      .delete<IDeleteResponse>(url)
      .pipe(
        map((res : IDeleteResponse) => res.message )
      )
  }
}

