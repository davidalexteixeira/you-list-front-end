import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class PlaylistService {

  playlist = Array<any>();

  API_URL = 'http://localhost:3000'

  constructor(private httpClient: HttpClient) { }

  getList(): Promise<any> {

    return this.httpClient.get(`${this.API_URL}/playlist`)
      .toPromise()
  }

  getPlayList(id): Promise<any>  {
    return this.httpClient.get(`${this.API_URL}/playlist/single-playlist/${id}`)
    .toPromise()
   }
  
   createPlaylist(playlist: any): Promise<any> {
        return this.httpClient.post(`${this.API_URL}/playlist/create-playlist`, playlist)
      .toPromise()
  }


}
