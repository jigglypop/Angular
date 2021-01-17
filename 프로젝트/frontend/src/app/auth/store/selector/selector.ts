import { createFeatureSelector } from '@ngrx/store';
import { IAuthState } from 'src/app/auth/types/auth.interface';
import { IAppState } from 'src/app/shared/types/appState.interface';

// 루트셀렉터
export const authFeatureSelector = createFeatureSelector<
  IAppState,
  IAuthState
>('auth')
