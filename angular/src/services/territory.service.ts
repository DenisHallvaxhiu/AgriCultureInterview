import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TerritoryService {

  private url = 'https://agricapture.herokuapp.com/GetTerritoryGroup';

  constructor(private httpClient: HttpClient) { }

  getTerritory(){
    return this.httpClient.get(`${this.url}`);
  }
}
