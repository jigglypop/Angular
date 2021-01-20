import { Component, OnDestroy, OnInit } from '@angular/core';
import { createSelector, select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { listAction } from '../../store/actions/list.actions';
import { listFeatureSelector } from '../../store/selector/selector';
import { IListState } from '../../types/list.interface';
import { IPosts } from '../../types/posts.interface';

// 셀렉터
 const listSelector = createSelector(
   listFeatureSelector,
   (listState: IListState) => listState.lists
 )

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {

  constructor(private store:Store) { }

  posts$ : Subscription
  posts : IPosts
  ngOnInit(): void {
    this.store.dispatch(listAction())
    this.posts$ = this.store.pipe(select(listSelector)).subscribe(( res: IPosts )=> {
      this.posts = res
    })
  }
  ngOnDestroy(): void {
    this.posts$.unsubscribe()
  }
}
