import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { createSelector, select, Store } from '@ngrx/store'
import { Observable } from 'rxjs';
import { IError } from 'src/app/shared/types/error.interface';
import { loginAction } from '../../store/actions/login.action';
import { authFeatureSelector } from '../../store/selector/selector';
import { IAuthState } from '../../types/auth.interface';
import { IResponse } from '../../types/response.interface';


// 셀렉터
const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (auth: IAuthState) => auth.isSubmitting
)
const validationErrorsSelector = createSelector(
  authFeatureSelector,
  (auth: IAuthState) => auth.validationErrors
)
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  form : FormGroup
  isSubmitting$ : Observable<boolean>
  validationErrors$ : Observable<IError>

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit() : void {
    // 폼
    this.form = this.fb.group({
      username : ['', Validators.required],
      password : ['', Validators.required]
    })
    // 제출버튼
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    this.validationErrors$ = this.store.pipe(select(validationErrorsSelector))
  }
  onSubmit() : void {
    const request: IResponse = { user: this.form.value }
    this.store.dispatch(loginAction({ request }))
  }
}
