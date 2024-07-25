import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
   
  private apiUrl=environment.apiUrl ; 
  constructor(private http: HttpClient) { }

  getUser(): Observable<any> {
    const userdata:any={
      email:"test@gmail.com",
      password:'12345678'
    } ; 
    return this.http.post(`${this.apiUrl}/login`, userdata);
  }
}
