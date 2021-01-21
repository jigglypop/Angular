import { createFeatureSelector } from '@ngrx/store';
import { IAppState } from 'src/app/shared/types/appState.interface';
import { IBeforeReduceState } from '../../types/beforereduce.interface';
import { IUpdateReduceState } from '../../types/updatereduce.interface';

// 루트셀렉터
export const updateFeatureSelector = createFeatureSelector<
  IAppState,
  IUpdateReduceState
>('update')
