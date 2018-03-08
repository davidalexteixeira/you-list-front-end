import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'


@Injectable()
export class YoutubeService {

  API_URL = 'https://www.googleapis.com/youtube/v3/search'
  API_TOKEN = 'AIzaSyBLqowYCjvgN3kxq8McTtsC9cPFkvlxRNc'

  REST_API = 'http://localhost:3000/'
  

  constructor(private httpClient: HttpClient, 
    private _http: Http) { }



  getYoutubeList(query) {
      const options = {
        withCredentials: true
      };
      return this.httpClient.get(`${this.API_URL}?part=snippet&maxResults=15&order=viewCount&q=${query}&type=video&videoDefinition=high&key=${this.API_TOKEN}`, options)
      .toPromise()
     }

  addVideo(videoId, playlistId, videoName){
    const options = {
        withCredentials: true
      };
    const data = {
      videoId,
      videoName
    }
      return this.httpClient.post(`${this.REST_API}playlist/single-playlist/${playlistId}`, data, options)
      .toPromise()
  }

  deleteVideo(videoId, playlistId){
    const options = {
      withCredentials: true
    };
    const data = {
      videoId
    }
    return this.httpClient.put(`${this.REST_API}playlist/single-playlist/${playlistId}`, data, options)
    .toPromise();
  }
}
