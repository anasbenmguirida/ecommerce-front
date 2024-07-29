import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  
  private apiUrl=environment.apiUrl ; 
  constructor(private http: HttpClient )  { }

  getProducts(): Observable<any> {
    return this.http.get(`${this.apiUrl}/afficher-produits`);
  }
  addproduct(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/ajouter-produit`, data)};
   
  
}
