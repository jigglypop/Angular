import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TokenService } from '../shared/service/token.service';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthService } from './service/auth.service';
import { LoginEffect } from './store/effects/login.effect';
import { CheckEffect } from './store/effects/check.effect';
import { RegisterEffect } from './store/effects/register.effect';
import { reducers } from './store/reducers/reducers';
import { LogoutEffect } from './store/effects/logout.effect';

const routes = [
  {
    path:'register',
    component: RegisterComponent
  },
  {
    path:'login',
    component: LoginComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([
      RegisterEffect,
      LoginEffect,
      CheckEffect,
      LogoutEffect
     ]),
  ],
  providers: [
    AuthService,
    TokenService,
  ]
})
export class AuthModule { }
