import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { FormsModule }   from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AuthLoginPageComponent } from './components/auth-login-page/auth-login-page.component';
import { AuthSignupPageComponent } from './components/auth-signup-page/auth-signup-page.component';

import {AuthService} from './services/auth.service'
import { InitGuardService } from './guards/init-guard.service';
import { RequireAnonService } from './guards/require-anon.service';
import { RequireUserService } from './guards/require-user.service';


// -- routes
const routes: Routes = [
  { path: '',  component: HomePageComponent, canActivate: [ InitGuardService ] },
  { path: 'auth/login',  component: AuthLoginPageComponent, canActivate: [ RequireAnonService ] },
  { path: 'auth/signup',  component: AuthSignupPageComponent, canActivate: [ RequireAnonService ] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AuthLoginPageComponent,
    AuthSignupPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [AuthService,
     InitGuardService,
     RequireAnonService,
     RequireUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
