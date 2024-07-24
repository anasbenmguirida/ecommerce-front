import { Component, OnInit  } from '@angular/core';
import { ProductService } from '../product.service';
import { NgModule } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-produit',
  standalone: true,
  imports: [NgFor],
  templateUrl: './produit.component.html',
  styleUrl: './produit.component.css'
})
export class ProduitComponent implements OnInit{
  products: any[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      data => this.products = data,
      error => console.error('Error fetching products', error)
    );
  }
}
