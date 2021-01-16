import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TokenService } from '../shared/service/token.service';
import { RegisterComponent } from './components/register/register.component';
import { AuthService } from './service/auth.service';
import { RegisterEffect } from './store/effects/register.effect';
import { reducers } from './store/reducers/reducers';

const routes = [
  {
    path:'register',
    component: RegisterComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([ RegisterEffect ]),
  ],
  providers: [
    AuthService,
    TokenService
  ]
})
export class AuthModule { }
