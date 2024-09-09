import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { NgFor } from '@angular/common';
import { RouterModule , RouterLink , RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [NgFor , RouterModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {
produits:any[]=[] ; 
price:number=0 ; 
constructor(private cartService:CartService){}
ngOnInit(): void {
  this.produits=this.cartService.getItems() ; 
  this.price=this.cartService.getTotalPrice() ; 
  
}

}
