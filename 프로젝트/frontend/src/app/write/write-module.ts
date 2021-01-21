import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ErrorModule } from '../shared/module/error/error.module';
import { TokenService } from '../shared/service/token.service';
import { WriteComponent } from './components/write/write.component';
import { WriteService } from './service/wrie.service';
import { WriteEffect } from './store/effects/write.effect';
import { reducers } from './store/reducers/reducers';

const routes = [
  {
    path:'write',
    component: WriteComponent
  },
]

@NgModule({
  declarations: [
    WriteComponent
  ],
  imports: [
    ErrorModule,
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('write', reducers),
    EffectsModule.forFeature([
      WriteEffect,
     ]),
  ],
  providers: [
    WriteService,
    TokenService,
  ]
})
export class WriteModule { }
