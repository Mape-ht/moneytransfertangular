
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Envoi } from '../models/envoi';

@Injectable({
  providedIn: 'root'
})
export class EnvoiService {

  url = 'http://localhost:8080/'; // créer une variable url pour avoir le lien de l'API en back 
  constructor(private http:HttpClient) { }

  addEnvoi(envoi:Envoi): Observable<Object>{
return this.http.post(this.url + 'envois/add', envoi);

  }

  listEnvoi (){

    return this.http.get<any>(this.url + 'envois');
  }
}
