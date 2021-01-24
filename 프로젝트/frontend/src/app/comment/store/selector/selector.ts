import { createFeatureSelector } from '@ngrx/store';
import { IAppState } from 'src/app/shared/types/appState.interface';
import { ICommentReduceState } from '../../types/commentreduce.interface';

// 루트셀렉터
export const commentFeatureSelector = createFeatureSelector<
  IAppState,
  ICommentReduceState
>('comment')
