import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { ErrorModule } from './shared/module/error/error.module';
import { HeaderModule } from './shared/module/header/header.module';
import { LoginComponent } from './auth/components/login/login.component';
import { AuthInterceptor } from './shared/service/authinspector.service';
import { ListComponent } from './list/components/list/list.component';

import { AuthModule } from './auth/auth-module';
import { ListModule } from './list/list-module';
import { PostModule } from './post/post-module';
import { WriteModule } from './write/write-module';
import { UpdateModule } from './update/update-module';
import { PostComponent } from './post/components/post/post.component';
import { CommentModule } from './comment/comment-module';
import { ComemntComponent } from './comment/components/comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ListComponent,
    PostComponent,
    ComemntComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AuthModule,
    ListModule,
    PostModule,
    WriteModule,
    UpdateModule,
    CommentModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    EffectsModule.forRoot([]),
    ErrorModule,
    HeaderModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
