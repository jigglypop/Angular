import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TokenService } from '../shared/service/token.service';
import { ListComponent } from './components/list/list.component';
import { ListService } from './service/list.service';
import { ListEffect } from './store/effects/lists.effect';
import { reducers } from './store/reducers/reducers';


const routes = [
  {
    path:'',
    component: ListComponent
  },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('list', reducers),
    EffectsModule.forFeature([
      ListEffect
     ]),
  ],
  providers: [
    ListService,
    TokenService,
  ]
})
export class ListModule { }
