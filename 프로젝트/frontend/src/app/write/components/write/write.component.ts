import { Component, OnInit } from '@angular/core';
import { createSelector, select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IError } from 'src/app/shared/types/error.interface';
import { writeAction } from '../../store/actions/write.action';
import { writeFeatureSelector } from '../../store/selector/selector';
import { IWriteReduceState } from '../../types/writereduce.interface';

// // 셀렉터
const isSubmittingSelector = createSelector(
  writeFeatureSelector,
  (post: IWriteReduceState) => post.isSubmitting
);
const validationErrorsSelector = createSelector(
  writeFeatureSelector,
  (post: IWriteReduceState) => post.validationErrors
);
@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.scss'],
})
export class WriteComponent implements OnInit {
  isSubmitting$: Observable<boolean>;
  validationErrors$: Observable<IError>;
  title:string
  content:string

  constructor(private store: Store) {}

  ngOnInit(): void {
    // // 제출버튼
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.validationErrors$ = this.store.pipe(select(validationErrorsSelector));
  }
  onSubmit(): void {
    const request = {
      title: this.title,
      content: this.content
    }
    this.store.dispatch(writeAction({
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
