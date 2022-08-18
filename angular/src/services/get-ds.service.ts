import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetDSService {

  private url = 'http://localhost:1234/';

  constructor(private httpClient: HttpClient) { }

  getPostsGetAllDS(){
    return this.httpClient.get(`${this.url}GetAllDS`);
  }

}
