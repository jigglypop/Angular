import { NgModule } from '@angular/core';
import { HomeComponent } from './pages/home.component';
import { ServiceComponent } from './pages/service.component';
import { AboutComponent } from './pages/about.component';
import { NotFoundComponent } from './pages/not-found.component';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [
  { path : '', redirectTo: 'home', pathMatch: 'full'},
  { path : 'home', component: HomeComponent },
  { path : 'service', component: ServiceComponent },
  { path : 'about', component : AboutComponent },
  { path : '**', component : NotFoundComponent },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
