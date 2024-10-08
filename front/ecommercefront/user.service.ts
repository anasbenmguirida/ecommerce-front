import { Injectable } from '@angular/core';
import { environment } from './src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class userServive{
    private apiUrl=environment.apiUrl ; 
    constructor(private http: HttpClient )  { }
  
    saveUser(data:any): Observable<any>{
        return this.http.post(`${this.apiUrl}/register` , data )
    }
    loginUser(data:any):Observable<any>{
      return this.http.post(`${this.apiUrl}/login` , data)
    }
    /*getUser(id:number):Observable<any>{
      const token = localStorage.getItem('token'); 
      const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: headers};
    // the id should be on the url 
    return this.http.get(`${this.apiUrl}/user-info/${id}`,options)
    }*/
    PeopleCommande():Observable<any>{
      return this.http.get(`${this.apiUrl}/people-commandes`) ; 
    }
    
   sendEmail(recipient:any):Observable<any>{
    const token = localStorage.getItem('token'); 
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: headers};
     return this.http.post(`${this.apiUrl}/send-email`,  recipient ,{...options , responseType:'text'});
   }
    
    
}