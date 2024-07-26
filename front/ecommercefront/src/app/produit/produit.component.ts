import { Component, OnInit  } from '@angular/core';
import { ProductService } from '../product.service';
import { NgModule } from '@angular/core';
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
