import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class ProductService {
  token = localStorage.getItem('token'); 
  headers = new HttpHeaders({
    'Authorization': `Bearer ${this.token}`
  });
  options = { headers:this.headers};
  
  private apiUrl=environment.apiUrl ; 
  constructor(private http: HttpClient )  { }

  getProducts(): Observable<any> {
    return this.http.get(`${this.apiUrl}/products`);
  }
  getProduct(id:number): Observable<any> {
    return this.http.get(`${this.apiUrl}/product-details/${id}`);
  }
  saveProduct(name:any , description:any , quantity:any, price:any , image:any ):Observable<any>{
   
    let params = new HttpParams();
    params = params.append('name', name);
    params = params.append('description', description);
    params = params.append('quantity',quantity);
    params = params.append('price', price);
    params = params.append('image', image);
    return this.http.post(`${this.apiUrl}/save-product`,{ ...this.options,params, responseType: 'text' } ) ;

  }
  deleteProduct(id: number): Observable<any> {
    console.log("Options  : " , this.options) ; 
    // the response type should be a text
    return this.http.delete(`${this.apiUrl}/delete-product/${id}`,{ ...this.options, responseType: 'text' });
  }
  
  EditProduct(product:any):Observable<any>{
   return this.http.post(`${this.apiUrl}/edit-product`,product, { ...this.options, responseType: 'text' });
  }

  getProductImage(id: number) {
   return  this.http.get(`${this.apiUrl}/image/${id}` , {responseType:'blob'}) ; 
  }
   
  
}
