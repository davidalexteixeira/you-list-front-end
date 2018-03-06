import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class YoutubeService {

  API_URL = 'https://www.googleapis.com/youtube/v3/search'
  API_TOKEN = 'AIzaSyBLqowYCjvgN3kxq8McTtsC9cPFkvlxRNc'

  constructor(private httpClient: HttpClient, private _http: Http) { }



  getYoutubeList(query) {
      const options = {
        withCredentials: true
      };
      return this.httpClient.get(`${this.API_URL}?part=snippet&maxResults=5&order=viewCount&q=${query}&type=video&videoDefinition=high&key=${this.API_TOKEN}`, options)
      .toPromise()
     }
}
