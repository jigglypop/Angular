export enum ActionTypes {
  // 회원가입
  REGISTER = '[AUTH] Register',
  REGISTER_SUCCESS = '[AUTH] Register success',
  REGISTER_FAILURE = '[AUTH] Register failure',

  // 로그인
  LOGIN = '[AUTH] Login',
  LOGIN_SUCCESS = '[AUTH] Login success',
  LOGIN_FAILURE = '[AUTH] Login failure',

  // 체크
  CHECK = '[AUTH] Check',
  CHECK_SUCCESS = '[AUTH] Check success',
  CHECK_FAILURE = '[AUTH] Check failure',

  // 로그아웃
  LOGOUT = '[AUTH] Logout',
}
