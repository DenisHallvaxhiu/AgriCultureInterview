import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private url = 'https://agricapture.herokuapp.com/GetLogin';

  constructor(private httpClient: HttpClient) {}

  getLogin(username:string,password:string) {
    return this.httpClient.post(this.url, {
      username: username,
      password: password,
    });
  }
}
