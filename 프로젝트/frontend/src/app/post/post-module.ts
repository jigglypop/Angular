import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from '../app-routing.module';

import { TokenService } from '../shared/service/token.service';
import { PostComponent } from './components/post/post.component';
import { PostService } from './service/post.service';
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
    AppRoutingModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('post', reducers),
    EffectsModule.forFeature([
      PostEffect
     ]),
  ],
  exports:[
    RouterModule
  ],
  providers: [
    PostService,
    TokenService,
  ]
})
export class PostModule { }
