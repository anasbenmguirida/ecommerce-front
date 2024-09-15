import { Injectable } from "@angular/core";
import { environment } from './src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class CommandeService{
    private url=environment.apiUrl ; 
    constructor(private http:HttpClient){}

    getCommandes(){
        const token = localStorage.getItem('token'); 
        const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: headers};
        return this.http.get(`${this.url}/commandes` ,{...options , responseType:'text'})
    }
}