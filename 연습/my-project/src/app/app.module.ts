import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TemplateClassBindingComponent } from './template-class-binding/template-class-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateClassBindingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
