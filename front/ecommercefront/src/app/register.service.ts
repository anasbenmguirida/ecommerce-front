import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
   
  private Url=environment.apiUrl ; 
  constructor(private http: HttpClient) { }

  sendFormData(data: any): Observable<any> {
    return this.http.post(`${this.Url}/register`, data)};
   
}
