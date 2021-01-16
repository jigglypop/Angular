import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { createFeatureSelector, createSelector, select, Store } from '@ngrx/store'
import { Observable } from 'rxjs';
import { IAppState } from 'src/app/shared/types/appState.interface';
import { IError } from 'src/app/shared/types/error.interface';
import { registerAction } from '../../store/actions/register.action';
import { IAuthState } from '../../types/auth.interface';
import { IResponse } from '../../types/response.interface';


// 셀렉터
export const authFeatureSelector = createFeatureSelector<
  IAppState,
  IAuthState
>('auth')

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (auth: IAuthState) => auth.isSubmitting
)

export const validationErrorsSelector = createSelector(
  authFeatureSelector,
  (auth: IAuthState) => auth.validationErrors
)

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
  form : FormGroup
  isSubmitting$ : Observable<boolean>
  validationErrors$ : Observable<IError>

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit() : void {
    this.initializeForm()
    this.initializeValue()
  }

  initializeForm() : void {
    this.form = this.fb.group({
      username : ['', Validators.required],
      email : ['', Validators.required],
      password : ['', Validators.required]
    })
  }

  initializeValue() : void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    this.validationErrors$ = this.store.pipe(select(validationErrorsSelector))
  }

  onSubmit() : void {
    const request: IResponse = {
      user: this.form.value
    }
    this.store.dispatch(registerAction({ request }))
  }
}
