import { Component, OnInit  } from '@angular/core';
import { ProductService } from '../product.service';

import { NgFor } from '@angular/common';
import { CartService } from '../cart.service';
import { ToastrService } from 'ngx-toastr';
import { HeaderComponent } from '../header/header.component';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { RouterModule , RouterLink , RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-produit',
  standalone: true,
  imports: [NgFor , RouterModule,HeaderComponent , RouterLink , RouterOutlet ],
  templateUrl: './produit.component.html',
  styleUrl: './produit.component.css'
})
export class ProduitComponent implements OnInit{

  products: any[] = [];
  FiltredProductList :any[]=[]; 
  numberOfProducts:number =0; 
  image:any ; 
  retrieveResonse:any ; 
  base64Data:any ; 

  constructor(private productService: ProductService , 
    private cartservice:CartService ,private sanitizer: DomSanitizer , private toaster:ToastrService) { 
    this.FiltredProductList = this.products
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
      this.products.forEach(product => {
        this.productService.getProductImage(product.id).subscribe({
            next: (blob) => {
              console.log("the object fetched"  , blob) ; 
              const reader = new FileReader();
              reader.onloadend = () => {
                  // No need for sanitizer now since we're using base64
                  product.image = reader.result as string;
                  // Debug log - should show the base64 string
                  console.log('Image loaded successfully for product:', product.id);
              };
              reader.readAsDataURL(blob);
            }
      })
       
      });
    });
    this.cartservice.itemsSubject.subscribe((items: any[]) => {
      this.numberOfProducts = items.length;
    });
  }

 
  
   

    
   
  
 
    
  
  addToCart(product:any){
    this.cartservice.addToCart(product) ;
    
    
    // i want to add a link to cart in the notification
   this.toaster.success("Product added succesfully ! " , "Add product") ; 
    console.log(product) ; 
  }
  filterResults(text: string) {
   
    if (!text) {
      this.FiltredProductList = this.products;
      this.ngOnInit()
      return;
    }
    this.FiltredProductList = this.products.filter((product) =>
      product.name.toLowerCase().includes(text.toLowerCase())
    );
    this.products=this.FiltredProductList ; 
    console.log(this.FiltredProductList);
  }
 
}
