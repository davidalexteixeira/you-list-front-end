import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Http, HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AuthLoginPageComponent } from './pages/auth-login-page/auth-login-page.component';
import { AuthSignupPageComponent } from './pages/auth-signup-page/auth-signup-page.component';
import { PlaylistComponent } from './pages/playlist/playlist.component';
import { SinglePlaylistComponent } from './pages/single-playlist/single-playlist.component';
import { CreatePlaylistComponent } from './pages/create-playlist/create-playlist.component';
import { PlaylistListComponent } from './components/playlist-list/playlist-list.component';
import { PlaylistCardComponent } from './components/playlist-card/playlist-card.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';

import { AuthService } from './services/auth.service';
import { InitGuardService } from './guards/init-guard.service';
import { RequireAnonService } from './guards/require-anon.service';
import { RequireUserService } from './guards/require-user.service';
import { PlaylistService } from './services/playlist.service';
import { UserService } from './services/user.service';
import { YoutubeService } from './services/youtube.service';
import { YoutubeComponent } from './components/youtube/youtube.component';





// -- routes
const routes: Routes = [
  { path: '', component: HomePageComponent, canActivate: [InitGuardService] },
  { path: 'auth/login',  component: AuthLoginPageComponent, canActivate: [ RequireAnonService ] },
  { path: 'auth/signup',  component: AuthSignupPageComponent, canActivate: [ RequireAnonService ] },
  { path: 'user-profile/:id',  component: UserProfileComponent, canActivate: [ RequireUserService ] },
  { path: 'playlist', component: PlaylistComponent, canActivate: [ RequireUserService] },
  { path: 'playlist/single-playlist/:id', component: SinglePlaylistComponent, canActivate: [ RequireUserService] },
  { path: 'playlist/create-playlist', component: CreatePlaylistComponent, canActivate: [ RequireUserService] },
  { path: 'youtube', component: YoutubeComponent, canActivate: [ RequireUserService] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AuthLoginPageComponent,
    AuthSignupPageComponent,
    PlaylistComponent,
    SinglePlaylistComponent,
    CreatePlaylistComponent,
    PlaylistListComponent,
    PlaylistCardComponent,
    UserProfileComponent,
    YoutubeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    HttpModule
  ],
  providers: [
     AuthService,
     InitGuardService,
     RequireAnonService,
     RequireUserService,
     PlaylistService,
     UserService,
     YoutubeService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
