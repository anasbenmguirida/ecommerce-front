import { Component, OnInit  } from '@angular/core';
import { ProductService } from '../product.service';

import { NgFor } from '@angular/common';
import { CartService } from '../cart.service';
import { ToastrService } from 'ngx-toastr';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-produit',
  standalone: true,
  imports: [NgFor , HeaderComponent],
  templateUrl: './produit.component.html',
  styleUrl: './produit.component.css'
})
export class ProduitComponent implements OnInit{

  products: any[] = [];
  FiltredProductList :any[]=[]; 
  numberOfProducts:number =0; 

  constructor(private productService: ProductService , 
    private cartservice:CartService , private toaster:ToastrService) { 
    this.FiltredProductList = this.products
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      data => this.products = data,
      error => console.error('Error fetching products', error)
    );
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
