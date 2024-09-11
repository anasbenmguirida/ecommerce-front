import { Injectable } from '@angular/core';
import { environment } from './src/environments/environment';
import { HttpClient } from '@angular/common/http';
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
    
    
}