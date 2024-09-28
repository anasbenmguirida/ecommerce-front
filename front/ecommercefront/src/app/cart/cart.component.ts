import { Component } from '@angular/core';
import { ProduitComponent } from '../produit/produit.component';
import { CartService } from '../cart.service';
import { JsonPipe } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [ProduitComponent , JsonPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  numberOfProducts:number=0 ; 
  constructor(public cartservice:CartService , private router:Router , private toaster:ToastrService){}
  ngOnInit(): void {
    this.cartservice.itemsSubject.subscribe((items: any[]) => {
      this.numberOfProducts = items.length;
    });
  }
deleteitem(item:any){
  this.cartservice.deleteitem(item);
  this.toaster.warning("This item id deleted of you cart !")
 
}
incrementquantity(id:number){
  this.cartservice.incrementquantity(id);
}
decrementquantity(id:number){
  this.cartservice.decrementquantity(id);

}
confirm(){
  this.router.navigate(['/commande']) ; 
  this.toaster.success("One Last Step !")
}
}
