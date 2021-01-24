import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { createSelector, select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/auth/types/user.interface';
import { IComment } from '../../types/comment.interface';
import { readcommentAction } from '../../store/actions/readcomment.actions';
import { commentFeatureSelector } from '../../store/selector/selector';
import { ICommentReduceState } from '../../types/commentreduce.interface';
import { authFeatureSelector } from 'src/app/auth/store/selector/selector';
import { IAuthState } from 'src/app/auth/types/auth.interface';
import { deletecommentAction } from '../../store/actions/deletecomment.actions';
import { writecommentAction } from '../../store/actions/writecomment.actions';
import { deleterecommentAction } from '../../store/actions/deleterecomment.actions';
import { writerecommentAction } from '../../store/actions/writerecomment.actions';

// 셀렉터
const readcommentSelector = createSelector(
   commentFeatureSelector,
   (postState: ICommentReduceState) => postState.comments
)
// 현재유저
const currentUserSelector = createSelector(
  authFeatureSelector,
  (authState: IAuthState) => authState.currentUser
)

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class ComemntComponent implements OnInit {
  id : string
  commentId : number
  comments$ : Observable<IComment[]>
  comments : IComment[]
  currentUser$ : Observable<IUser>
  currentUser : IUser
  content : string | null
  recontent : string | null

  constructor(private store:Store, private route: ActivatedRoute ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')
    this.store.dispatch(readcommentAction({ id: this.id }))
    this.comments$ = this.store.pipe(select(readcommentSelector))
    this.comments$.subscribe(
      ( res : IComment[] | null)=> {
        this.comments = res
    })
    this.currentUser$ = this.store.pipe(select(currentUserSelector))
    this.currentUser$.subscribe(
      ( res : IUser | null)=> {
        this.currentUser = res
    })
  }
  // 코멘트 바꾸기
  onChangeContent(content : string):void {
    this.content = content
  }
  // 리코멘트 바꾸기
  onChangeReContent(recontent : string):void {
    this.recontent = recontent
  }
  // 리코멘트창 열기
  onOpenRecomment(commentId):void{
    this.commentId = commentId
  }
  // 코멘트
  onWriteComment():void{
    this.store.dispatch(writecommentAction({ content : this.content , id: this.id }))
  }
  // 리코멘트
  onWriteReComment(commentId):void{
    this.store.dispatch(writerecommentAction({ recontent : this.recontent , postId: this.id, commentId: commentId }))
  }
  // 코멘트 삭제
  onDeleteComment(_id: string):void{
    this.store.dispatch(deletecommentAction({ postId : this.id , id: _id }))
  }

  // 리코멘트 삭제
  onDeleteReComment(commentId: string, recommentId : string):void{
    this.store.dispatch(deleterecommentAction({ postId : this.id , commentId: commentId, recommentId: recommentId }))
  }
}
