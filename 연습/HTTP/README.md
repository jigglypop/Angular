# HTTP

---
## 2. GET
* 모든 리소스 또는 특정 리소스 조회 시 
* 
```javascript
// get의 기본 타입은 Object이므로 타입 명시
this.http.get<Todo[]>(this.url).subscribe(todos => this.todos = todos)
```  
* HttpHeaders : Content-type, Accep, 인증 토큰 등을 Http 요청 헤더에 추가할 필요가 있을 때 사용

```javascript
const headers = new HttpHeaders()
  .set('Context-type', 'application/json')
  .set('Authorization', 'my-auth-token-get')
```


## 4. HTTP 요청 중복 방지

* shareReplay : 메소드가 반환하는 옵저버블은 shareReplay 오퍼레이터에 의해 구독하는 모든 옵저버에게 공유됨

## 5. 인터셉터
* 인터셉터(HttpInterceptor) : 미들웨어 로직을 파이프라인에 삽입 가능
* 인터셉터를 사용하면 HTTP요청을 검사하거나 변환 가능하기 때문에 HTTP 요청 처리 전후에 특정 기능을 실행할 때 유용함
* HTTP 요청과 응답을 함께 처리할 수 있기 때문에 로그 처리 또는 요청 소요 시간 확인가 같은 작업 수행 가능

```javascript
// intercept 메소드는 2개의 파라미터를 갖는다
intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
  // AuthService 서비스로부터 인증 토큰 취득
  const authToken = this.auth.getToken()
  // 헤더에 인증 토큰을 추가한 새로운 httpRequest 객체를 생성(클론)
  const clonedRequest = req.clone({
    headers: req.headers.set('Authorization', authToken)
  })
  // 다음 미들웨어 체인에 클론한 객체 전달
  return next.handle(clonedRequest)
}
```
