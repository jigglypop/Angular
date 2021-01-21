import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from '../app-routing.module';
import { ErrorModule } from '../shared/module/error/error.module';
import { TokenService } from '../shared/service/token.service';
import { UpdateComponent } from './components/update/update.component';
import { reducers } from './store/reducers/reducers';

import { UpdateService } from './service/update.service';
import { UpdateEffect } from './store/effects/update.effect';

const routes = [
  {
    path:'update/:id',
    component:UpdateComponent
  },
]

@NgModule({
  declarations: [
    UpdateComponent
  ],
  imports: [
    ErrorModule,
    CommonModule,
    AppRoutingModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('update', reducers),
    EffectsModule.forFeature([
      UpdateEffect,
     ]),
  ],
  exports:[
    RouterModule
  ],
  providers: [
    UpdateService,
    TokenService,
  ]
})
export class UpdateModule { }
