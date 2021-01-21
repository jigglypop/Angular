import { createFeatureSelector } from '@ngrx/store';
import { IAppState } from 'src/app/shared/types/appState.interface';
import { IWriteReduceState } from '../../types/writereduce.interface';

// 루트셀렉터
export const writeFeatureSelector = createFeatureSelector<
  IAppState,
  IWriteReduceState
>('write')
