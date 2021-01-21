import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { createSelector, select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { postFeatureSelector } from 'src/app/post/store/selector/selector';
import { IPostReduceState } from 'src/app/post/types/postreduce.interface';
import { IError } from 'src/app/shared/types/error.interface';
import { IPost } from 'src/app/write/types/post.interface';
import { updateAction } from '../../store/actions/update.action';
import { updateFeatureSelector } from '../../store/selector/selector';
import { IUpdateReduceState } from '../../types/updatereduce.interface';

// // 셀렉터
const isSubmittingSelector = createSelector(
  updateFeatureSelector,
  (post: IUpdateReduceState) => post.isSubmitting
);
const validationErrorsSelector = createSelector(
  updateFeatureSelector,
  (post: IUpdateReduceState) => post.validationErrors
);

// 셋팅
const postSelector = createSelector(
  postFeatureSelector,
  (postState: IPostReduceState) => postState.post
)

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
})
export class UpdateComponent implements OnInit {
  id : string
  post$ : Observable<IPost>
  post : IPost
  isSubmitting$: Observable<boolean>;
  validationErrors$: Observable<IError>;
  title:string
  content:string

  constructor(private store: Store, private route:ActivatedRoute) {}

  ngOnInit(): void {
    // 제출버튼
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.validationErrors$ = this.store.pipe(select(validationErrorsSelector));
    this.id = this.route.snapshot.paramMap.get('id')
    // 포스트
    this.post$ = this.store.pipe(select(postSelector))
    this.post$.subscribe(
      ( res : any)=> {
        this.post = res
        console.log(res)
        this.onChangeTitle(res.title)
        this.onChangeContent(res.content)
    })
  }
  onSubmit(): void {
    const request = {
      title: this.title,
      content: this.content,
      id:this.id
    }
    this.store.dispatch(updateAction({
      request : request
    }));
  }
  onChangeTitle(title:string){
    this.title = title
  }
  onChangeContent(content:string){
    this.content = content
  }
}
