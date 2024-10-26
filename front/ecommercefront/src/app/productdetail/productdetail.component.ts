import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { HeaderComponent } from '../header/header.component';
import { RouterLink , RouterModule , RouterLinkActive } from '@angular/router';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-productdetail',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './productdetail.component.html',
  styleUrl: './productdetail.component.css'
})
export class ProductdetailComponent implements OnInit {
  
  constructor(private router:Router , private route:ActivatedRoute ,private cartService:CartService, private productService:ProductService){}
  product:any ;
  id:any ;  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'] ; 
    this.id = parseInt(this.id) ;
   console.log("the id :  "  , this.id) 
   this.productService.getProduct(this.id).subscribe(
    (data)=> { this.product = data  ; 
     })
   this.productService.getProductImage(this.id).subscribe({
    next: (blob) => {
      console.log("the object fetched"  , blob) ; 
      const reader = new FileReader();
      reader.onloadend = () => {
          // No need for sanitizer now since we're using base64
          this.product.image = reader.result as string;
          // Debug log - should show the base64 string
          console.log('Image loaded successfully for product:', this.product.id);
      };
      reader.readAsDataURL(blob);
    }
})
   
  }
  
 goBack(){
  this.router.navigate(['/produits']) ; 
 }
 addToCart(produit:any){
  this.cartService.addToCart(produit)
 }
}

