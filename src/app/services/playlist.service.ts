import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../environments/environment';


@Injectable()
export class PlaylistService {



  API_URL = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  getList(): Promise<any> {
    return this.httpClient.get(`${this.API_URL}/playlist`)
    .toPromise();
  }

  getPlayList(id): Promise<any>  {
    return this.httpClient.get(`${this.API_URL}/playlist/single-playlist/${id}`)
    .toPromise();
   }

   getAllByUser(userId: any): Promise<any> {
    const options = {
      withCredentials: true
    };
      return this.httpClient.get(`${this.API_URL}/user-profile/playlists/${userId}`, options)
      .toPromise();
   }

   createPlaylist(playlist: any): Promise<any> {
    const options = {
      withCredentials: true
    };
      return this.httpClient.post(`${this.API_URL}/playlist/create-playlist`, playlist, options)
      .toPromise();
  }
}
