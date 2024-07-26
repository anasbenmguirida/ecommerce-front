import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items:any[] = JSON.parse(localStorage.getItem("cartItem") || '[]' ); 
  constructor() { }
  addToCart(produit:any ) {
    this.items.push({ ...produit , quantity :1});
    localStorage.setItem("cartItem", JSON.stringify(this.items));
  }
  getItems(){
    return this.items ; 
  }
  deleteitem(item:any){
    this.items.splice(this.items.indexOf(item),1);
    localStorage.setItem("cartItem", JSON.stringify(this.items));
}
incrementquantity(id:number){
  this.items.map((item:any)=>{
    if(item.id==id){
      item.quantity++;
      }
      })
      localStorage.setItem("cartItem", JSON.stringify(this.items));
}
decrementquantity(id:number){
  this.items.map((item:any)=>{
    if(item.id==id){
      item.quantity--;
      }
})
localStorage.setItem("cartItem", JSON.stringify(this.items));
  
}
}
