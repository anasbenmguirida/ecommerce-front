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
    return this.http.get(`${this.apiUrl}/products`);
  }
  saveProduct(data:any):Observable<any>{
    return this.http.post(`${this.apiUrl}/save-product`,data , {responseType: 'text'}) ;

  }
  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete-product/${id}` , {responseType: 'text'});
  }
  EditProduct(product:any):Observable<any>{
    return this.http.post(`${this.apiUrl}/edit-product`,product,{responseType:'text'});
  }
   
  
}
