import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxLoadingModule } from 'ngx-loading';

import { HttpClientModule } from '@angular/common/http';
import { ListPageComponent } from './list-page/list-page.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';

const appRoutes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'list', component: ListPageComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ListPageComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    NgxLoadingModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
