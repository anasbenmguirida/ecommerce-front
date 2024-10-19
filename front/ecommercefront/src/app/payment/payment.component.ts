import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { NgFor } from '@angular/common';
import { RouterModule , RouterLink , RouterLinkActive, Router, ActivatedRoute } from '@angular/router';
import { userServive } from '../../../user.service';
import { CommandeService } from '../../../commande.service';


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
  CommandeList:any[]=[]
  userId:number | undefined; 
  constructor(private cartService:CartService, private commandeService:CommandeService,private userService:userServive, private route:ActivatedRoute){}
  public setuserId(id:number){
    this.userId=id ; 
  }
  ngOnInit(): void {
    this.produits=this.cartService.getItems() ; 
    this.price=this.cartService.getTotalPrice() ; 
    this.route.params.subscribe(params => {
    this.userInfo = JSON.parse(params['userInfo']);
      
  });
  // fetch the id of the current user from the backend 
  this.userService.GetUserDetails(this.userInfo.email).subscribe(
    (data) => {
      this.setuserId(data) ; 
      console.log("user id : " , this.userId) ; 
    })
  let Commande = {
    "name" : this.userInfo.name , 
    "email":this.userInfo.email ,
    "products":this.produits, //an array of the selected items 
    "price":this.price
  } ; 
  // send the CommandeList to the backend
  // userId , product_id , quantity  , price 
  console.log("product desired : " , Commande.products)
    for(let product of  Commande.products){
        console.log("product ids " , product.id)
        this.CommandeList.push({
          "userId":2,
          "productId":product.id ,
          "quantity":product.quantity ,
          "price":product.price
          }) ; 
          // send it to the backend 
          this.commandeService.saveCommande(this.CommandeList).subscribe(
            (data) => {
              console.log(data) ;
            }
          )
    }
    console.log("user id debugging : " + this.userId)
    console.log("commande list : " , this.CommandeList) ;



  
    
};
  
  
}

