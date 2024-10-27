import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  public items:any[] = JSON.parse(localStorage.getItem("cartItem") || '[]' ); 
  private numberOfProducts = 0;
  private productsSubject = new BehaviorSubject<number>(this.numberOfProducts);

  getNumberofproducts(): number {
    return this.numberOfProducts;
  }

  getProductsObservable() {
    return this.productsSubject.asObservable();
  }


  addToCart(produit:any ):void {
    this.items.push({ ...produit , quantity :1});
    localStorage.setItem("cartItem", JSON.stringify(this.items));
    this.numberOfProducts++ ; 
    this.productsSubject.next(this.numberOfProducts);
  }
  
  getItems():any[]{
    return this.items ; 
  }
 
  deleteitem(item:any){
    this.items.splice(this.items.indexOf(item),1);
    localStorage.setItem("cartItem", JSON.stringify(this.items));
   this.numberOfProducts-- ; 
   this.productsSubject.next(this.numberOfProducts);
}
incrementquantity(id:number){
  this.items.map((item:any)=>{
    if(item.id==id){
      item.quantity++;
      }
      }) ; 
      localStorage.setItem("cartItem", JSON.stringify(this.items));
}
decrementquantity(id:number){
  this.items.map((item:any)=>{
    if(item.id==id){
      item.quantity--;
      }
});
localStorage.setItem("cartItem", JSON.stringify(this.items));
  
}
getTotalPrice(){
  let price:number =0;
  let items:any[] = this.getItems() ; 
  for(let product of items){
  price=price + product.price*product.quantity ; 
  }
  return price ; 
}
}
