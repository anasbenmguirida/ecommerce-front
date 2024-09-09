import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  public items:any[] = JSON.parse(localStorage.getItem("cartItem") || '[]' ); 
  public itemsSubject = new BehaviorSubject<any[]>(this.items);constructor() { }

  getNumberofproducts():number{
    return this.itemsSubject.value.length;
  }

  addToCart(produit:any ):void {
    this.items.push({ ...produit , quantity :1});
    this.itemsSubject.next(this.items);
    localStorage.setItem("cartItem", JSON.stringify(this.items));
  }
  
  getItems():any[]{
    return this.items ; 
  }
 
  deleteitem(item:any){
    this.items.splice(this.items.indexOf(item),1);
    this.itemsSubject.next(this.items);
    localStorage.setItem("cartItem", JSON.stringify(this.items));
   
}
incrementquantity(id:number){
  this.items.map((item:any)=>{
    if(item.id==id){
      item.quantity++;
      }
      }) ; 
      this.itemsSubject.next(this.items);
      localStorage.setItem("cartItem", JSON.stringify(this.items));
}
decrementquantity(id:number){
  this.items.map((item:any)=>{
    if(item.id==id){
      item.quantity--;
      }
});
this.itemsSubject.next(this.items);
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
