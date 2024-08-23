import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-productlisst',
  standalone: true,
  imports: [],
  templateUrl: './productlisst.component.html',
  styleUrl: './productlisst.component.css'
})
export class ProductlisstComponent {
  private products:any ; 
// use the same service to get the prosucts from the database 
constructor(private productlisst:ProductService) {} 
getProducts(){
  this.products = this.productlisst.getProducts() ; 
}
}
