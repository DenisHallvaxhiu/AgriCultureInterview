import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetDSService {

  private url = 'https://agricapture.herokuapp.com/GetAllDS';

  constructor(private httpClient: HttpClient) { }

  getPostsGetAllDS(){
    return this.httpClient.get(`${this.url}`);
  }

}
