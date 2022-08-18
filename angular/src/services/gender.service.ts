import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GenderService {

  private url = 'http://localhost:1234/GetGender';

  constructor(private httpClient: HttpClient) { }

  getGender(){
    return this.httpClient.get(`${this.url}`);
  }
}
