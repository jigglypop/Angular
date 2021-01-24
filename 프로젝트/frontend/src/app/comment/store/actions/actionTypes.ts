export enum ActionTypes {
  // 코멘트 읽기
  READCOMMENT = '[READCOMMENT] Readcomment',
  READCOMMENT_SUCCESS = '[READCOMMENT] Readcomment success',
  READCOMMENT_FAILURE = '[READCOMMENT] Readcomment failure',
  // 코멘트 등록
  WRITECOMMENT = '[WRITECOMMENT] WriteComment',
  WRITECOMMENT_SUCCESS = '[WRITECOMMENT] WriteComment success',
  WRITECOMMENT_FAILURE = '[WRITECOMMENT] WriteComment failure',
  // 리코멘트 등록
  WRITERECOMMENT = '[WRITERECOMMENT] WriteReComment',
  WRITERECOMMENT_SUCCESS = '[WRITERECOMMENT] WriteReComment success',
  WRITERECOMMENT_FAILURE = '[WRITERECOMMENT] WriteReComment failure',
  // 코멘트 삭제
  DELETECOMMENT = '[DELETECOMMENT] DelteComment',
  DELETECOMMENT_SUCCESS = '[DELETECOMMENT] DelteComment success',
  DELETECOMMENT_FAILURE = '[DELETECOMMENT] DelteComment failure',
  // 리코멘트 삭제
  DELETERECOMMENT = '[DELETERECOMMENT] DelteReComment',
  DELETERECOMMENT_SUCCESS = '[DELETERECOMMENT] DelteReComment success',
  DELETERECOMMENT_FAILURE = '[DELETERECOMMENT] DelteReComment failure',
}
