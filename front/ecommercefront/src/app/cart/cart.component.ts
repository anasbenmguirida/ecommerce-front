import { Component } from '@angular/core';
import { ProduitComponent } from '../produit/produit.component';
import { CartService } from '../cart.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [ProduitComponent , JsonPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  constructor(public cartservice:CartService){}

deleteitem(item:any){
  this.cartservice.deleteitem(item);
}
incrementquantity(id:number){
  this.cartservice.incrementquantity(id);
}
decrementquantity(id:number){
  this.cartservice.decrementquantity(id);

}
}
