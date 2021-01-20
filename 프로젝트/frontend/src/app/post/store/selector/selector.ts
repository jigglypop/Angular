import { createFeatureSelector } from '@ngrx/store';
import { IAppState } from 'src/app/shared/types/appState.interface';
import { IPostReduceState } from '../../types/postreduce.interface';

// 루트셀렉터
export const postFeatureSelector = createFeatureSelector<
  IAppState,
  IPostReduceState
>('post')
