import { Injectable } from '@angular/core';
import { environment } from './src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class userServive{
    private apiUrl=environment.apiUrl ; 
    constructor(private http: HttpClient )  { }
  
    saveUser(data:any): Observable<any>{
        return this.http.post(`${this.apiUrl}/register` , data ,{responseType: 'text'} )
    }
    loginUser(data:any):Observable<any>{
      return this.http.post(`${this.apiUrl}/login` , data ,{responseType: 'text'})
    }
    loginUserAdmin(data:any):Observable<any>{
      return this.http.post(`${this.apiUrl}/login-users` , data ,{responseType: 'text'})
    }
    
}