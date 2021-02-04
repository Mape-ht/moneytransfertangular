import { Emetteur } from './../models/emetteur';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmetteurService {

  private getUrl: string = "http://localhost:8080/api/emetteurs";

  constructor(private _httpClient: HttpClient) { }

  getEmetteurs():Observable<Emetteur[]>{
  
  return this._httpClient.get<Emetteur[]>(this.getUrl).pipe(
    map(response => response)

  ); 
  }
}
