import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { IResponse } from '../types/response.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { environment } from 'src/environments/environment';
import { IPosts } from '../types/posts.interface';

@Injectable()
export class ListService {
  constructor(private http: HttpClient) {}
  // 리스트
  list() : Observable<IPosts> {
    const url = environment.url + '/posts'
    return this.http
      .get<IResponse>(url)
      .pipe(
        map((res : IResponse) => res )
      )
  }
}

