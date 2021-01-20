import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { createSelector, select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { IPost } from 'src/app/list/types/post.interface';
import { postAction } from '../../store/actions/post.actions';
import { postFeatureSelector } from '../../store/selector/selector';
import { IPostReduceState } from '../../types/postreduce.interface';
import { IPostResponse } from '../../types/response.interface';



// 셀렉터
 const postSelector = createSelector(
   postFeatureSelector,
   (postState: IPostReduceState) => postState.post
 )

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, OnDestroy {
  id : string
  post$ : Subscription
  post : IPost
  constructor(private store:Store, private route:ActivatedRoute) { }

  ngOnInit() {
    this.getParam()
    this.getPost()
  }
  ngOnDestroy(): void {
    this.post$.unsubscribe()
  }

  getParam() : void{
    this.id = this.route.snapshot.paramMap.get('id')
  }
  getPost() : void{
    this.store.dispatch(postAction({ id: this.id }))
    this.post$ = this.store.pipe(select(postSelector)).subscribe(
      ( res : IPost )=> {
        this.post = res
    })
  }
}
