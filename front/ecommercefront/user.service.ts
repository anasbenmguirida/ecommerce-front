import { Injectable } from '@angular/core';
import { environment } from './src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class userServive{
    private apiUrl=environment.apiUrl ; 
    constructor(private http: HttpClient )  { }
    private token = localStorage.getItem('token'); 
    private headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
    private options = { headers: this.headers};
  
    saveUser(data:any): Observable<any>{
        return this.http.post(`${this.apiUrl}/register` , data )
    }
    loginUser(data:any):Observable<any>{
      return this.http.post(`${this.apiUrl}/login` , data)
    }
  
    sendEmail(recipient:any):Observable<any>{
      return this.http.post(`${this.apiUrl}/send-email`,  recipient ,{...this.options , responseType:'text'});
   }
   getUser(id:number):Observable<any>{
    return this.http.get(`${this.apiUrl}/user-info/${id}`);
   }
   GetUserDetails(email:string):Observable<any>{
    // the email is a RequestParam
    let params = new HttpParams();
    params = params.append('email', email);
    return this.http.get(`${this.apiUrl}/info` ,{params: params});
   
   }
    
    
}