import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TerritoryService {

  private url = 'http://localhost:1234/GetTerritoryGroup';

  constructor(private httpClient: HttpClient) { }

  getTerritory(){
    return this.httpClient.get(`${this.url}`);
  }
}
