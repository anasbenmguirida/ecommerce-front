import { Component, OnInit  } from '@angular/core';
import { ProductService } from '../product.service';

import { NgFor } from '@angular/common';
import { CartService } from '../cart.service';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-produit',
  standalone: true,
  imports: [NgFor, 
    BrowserAnimationsModule, SimpleNotificationsModule],
  templateUrl: './produit.component.html',
  styleUrl: './produit.component.css'
})
export class ProduitComponent implements OnInit{
  products: any[] = [];

  constructor(private productService: ProductService , private cartservice:CartService) { }

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
 
}
