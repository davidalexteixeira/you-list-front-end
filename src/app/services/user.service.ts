import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {

  API_URL = 'http://localhost:3000'

  constructor(private httpClient: HttpClient) { }

  getUser(id: any): Promise<any>  {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.API_URL}/user-profile/${id}`, options)
    .toPromise()
   }



}
