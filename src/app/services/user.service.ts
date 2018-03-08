import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../environments/environment';

@Injectable()
export class UserService {

  API_URL = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }


  getPlayList():  Promise<any>  {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.API_URL}/user/playlists`, options)
    .toPromise();
  }

  deletePlayList(playlist, userId): Promise<any> {
    const options = {
      withCredentials: true
    };
    const data = {
      playlist
    };
    return this.httpClient.put(`${this.API_URL}/user/${userId}`, data, options)
    .toPromise();
  }
}
