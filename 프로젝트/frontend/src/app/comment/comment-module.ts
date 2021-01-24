import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers/reducers';
import { TokenService } from '../shared/service/token.service';

import { DeleteCommentService } from './service/deletecomment.service';
import { DeleteReCommentService } from './service/deleterecomment.service';
import { ReadCommentService } from './service/readcomment.service';
import { WriteCommentService } from './service/writecomment.service';
import { DeleteCommentEffect } from './store/effects/deletecomment.effect';
import { DeleteReCommentEffect } from './store/effects/deleterecomment.effect';
import { ReadCommentEffect } from './store/effects/readcomment.effect';
import { WriteCommentEffect } from './store/effects/writecomment.effect';
import { WriteReCommentEffect } from './store/effects/writerecomment.effect';
import { WriteReCommentService } from './service/writerecomment.service';


@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('comment', reducers),
    EffectsModule.forFeature([
      ReadCommentEffect,
      WriteCommentEffect,
      WriteReCommentEffect,
      DeleteCommentEffect,
      DeleteReCommentEffect
     ]),
  ],
  providers: [
    ReadCommentService,
    WriteCommentService,
    WriteReCommentService,
    DeleteCommentService,
    DeleteReCommentService,
    TokenService,
  ]
})
export class CommentModule { }
