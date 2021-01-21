import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { createSelector, select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { postAction } from '../../store/actions/post.actions';
import { postFeatureSelector } from '../../store/selector/selector';
import { IPostReduceState } from '../../types/postreduce.interface';
import { Router } from '@angular/router'
import { deleteAction } from '../../store/actions/delete.actions';
import { IPost } from '../../types/post.interface';
import { IUser } from 'src/app/auth/types/user.interface';
import { authFeatureSelector } from 'src/app/auth/store/selector/selector';
import { IAuthState } from 'src/app/auth/types/auth.interface';

// 셀렉터
const postSelector = createSelector(
   postFeatureSelector,
   (postState: IPostReduceState) => postState.post
)
// 현재유저
const currentUserSelector = createSelector(
  authFeatureSelector,
  (authState: IAuthState) => authState.currentUser
)

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  id : string
  post$ : Observable<IPost>
  post : IPost
  currentUser$ : Observable<IUser>
  currentUser : IUser

  constructor(private store:Store, private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')
    this.store.dispatch(postAction({ id: this.id }))
    this.post$ = this.store.pipe(select(postSelector))
    this.post$.subscribe(
      ( res : IPost | null)=> {
        this.post = res
    })
    this.currentUser$ = this.store.pipe(select(currentUserSelector))
    this.currentUser$.subscribe(
      ( res : IUser )=> {
        this.currentUser = res
    })
  }

  onGoUpdate(_id: number):void{
    this.router.navigateByUrl(`/update/${_id}`)
  }
  onDelete(_id: number):void{
    this.store.dispatch(deleteAction({ id: this.id }))
  }
}
