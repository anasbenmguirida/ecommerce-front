import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
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
  getProduct(id:number): Observable<any> {
    return this.http.get(`${this.apiUrl}/product-details/${id}`);
  }
  saveProduct(data:any ):Observable<any>{
    const token = localStorage.getItem('token'); 
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: headers};
    return this.http.post(`${this.apiUrl}/save-product`,data,{ ...options, responseType: 'text' } ) ;

  }
  deleteProduct(id: number): Observable<any> {
    const token = localStorage.getItem('token'); 
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: headers}; // Create an options object with the headers
    console.log("Options  : " , options) ; 
    // the response type should be a text
    return this.http.delete(`${this.apiUrl}/delete-product/${id}`,{ ...options, responseType: 'text' });
    
    
  }
  
  EditProduct(product:any):Observable<any>{
    const token = localStorage.getItem('token'); 
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: headers }; // Create an options object with the headers
    console.log("Options  : " , options) ; 
    return this.http.post(`${this.apiUrl}/edit-product`,product, { ...options, responseType: 'text' });
  }

  getProductImage(id: number) {
   return  this.http.get(`${this.apiUrl}/image/${id}` , {responseType:'blob'}) ; 
  }
   
  
}
