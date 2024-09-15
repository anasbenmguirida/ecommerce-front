import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { NgFor } from '@angular/common';
import { RouterModule , RouterLink , RouterLinkActive, Router, ActivatedRoute } from '@angular/router';
import { userServive } from '../../../user.service';

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
user:any ; 
userInfo:any ; 
constructor(private cartService:CartService, private userService:userServive, private route:ActivatedRoute){}
ngOnInit(): void {
  this.produits=this.cartService.getItems() ; 
  this.price=this.cartService.getTotalPrice() ; 
  
  this.route.params.subscribe(params => {
    this.userInfo = JSON.parse(params['userInfo']);
     
  });
  /*
  console.log("email : " , this.userInfo.email);
  this.userService.sendEmail(this.userInfo.email).subscribe(
    data=>console.log("email sent succesfully"),
    error =>console.error(error)
    
  )
  */ 
}
}
