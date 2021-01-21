import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { createSelector, select, Store } from '@ngrx/store'
import { Observable } from 'rxjs';
import { IError } from 'src/app/shared/types/error.interface';
import { registerAction } from '../../store/actions/register.action';
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
    this.form = this.fb.group({
      username : ['', Validators.required],
      email : ['', Validators.required],
      password : ['', Validators.required]
    })
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    this.validationErrors$ = this.store.pipe(select(validationErrorsSelector))
  }

  onSubmit() : void {
    const request: IResponse = { user: this.form.value }
    this.store.dispatch(registerAction({ request }))
  }
}
