import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { IUser } from '../types/user.interface';
import { IResponse } from '../types/response.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}
  // 회원가입
  register(data : IResponse ) : Observable<IUser> {
    const url = environment.url + '/auth/register'
    return this.http
      .post<IResponse>(url, data)
      .pipe(
        map((res : IResponse) => res.user )
      )
  }

  // 로그인
  login(data : IResponse ) : Observable<IUser> {
    const url = environment.url + '/auth/login'
    return this.http
      .post<IResponse>(url, data)
      .pipe(
        map((res : IResponse) => res.user )
      )
  }

  // 체크
  check() : Observable<IUser> {
    const url = environment.url + '/auth/check'
    return this.http
      .get<IResponse>(url)
      .pipe(
        map((res : IResponse) => res.user )
      )
  }
}

