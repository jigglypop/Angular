import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { TokenService } from '../shared/service/token.service';
import { PostComponent } from './components/post/post.component';
import { DeleteService } from './service/delete.service';
import { PostService } from './service/post.service';
import { DeleteEffect } from './store/effects/delete.effect';
import { PostEffect } from './store/effects/post.effect';
import { reducers } from './store/reducers/reducers';

const routes = [
  {
    path:'post/:id',
    component: PostComponent
  },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('post', reducers),
    EffectsModule.forFeature([
      PostEffect,
      DeleteEffect
     ]),
  ],
  providers: [
    PostService,
    DeleteService,
    TokenService,
  ]
})
export class PostModule { }
