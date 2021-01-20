import { createFeatureSelector } from '@ngrx/store';
import { IAppState } from 'src/app/shared/types/appState.interface';
import { IListState } from '../../types/list.interface';

// 루트셀렉터
export const listFeatureSelector = createFeatureSelector<
  IAppState,
  IListState
>('list')
