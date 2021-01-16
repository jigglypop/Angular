import { IError } from 'src/app/shared/types/error.interface';
import { IUser } from './user.interface';

export interface IAuthState {
  isSubmitting: boolean
  currentUser: IUser | null
  isLoggedIn: boolean | null
  validationErrors: IError | null
}
