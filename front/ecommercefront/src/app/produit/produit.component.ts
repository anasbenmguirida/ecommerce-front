import { Component, OnInit  } from '@angular/core';
import { ProductService } from '../product.service';

import { NgFor } from '@angular/common';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-produit',
  standalone: true,
  imports: [NgFor],
  templateUrl: './produit.component.html',
  styleUrl: './produit.component.css'
})
export class ProduitComponent implements OnInit{

  products: any[] = [];
  FiltredProductList :any[]=[]; 

  constructor(private productService: ProductService , private cartservice:CartService) { 
    this.FiltredProductList = this.products
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      data => this.products = data,
      error => console.error('Error fetching products', error)
    );
    
   
  }
  addToCart(product:any){
    this.cartservice.addToCart(product) ;
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
