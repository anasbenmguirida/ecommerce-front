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
    private token = localStorage.getItem('token'); 
    private headers = new HttpHeaders({
   'Authorization': `Bearer ${this.token}`
    });
    private options = { headers: this.headers};

    getCommandes(){
       return this.http.get(`${this.url}/get-commandes` );
    }
    saveCommande(commande:any){
      return this.http.post(`${this.url}/save-details` , commande,{responseType: 'text'} )
    }
}