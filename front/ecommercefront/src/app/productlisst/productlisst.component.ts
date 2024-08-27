import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { NgFor } from '@angular/common';
import { RouterLink , RouterLinkActive , RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
@Component({
  selector: 'app-productlisst',
  standalone: true,
  imports: [NgFor,RouterLink , RouterLinkActive , RouterOutlet , SidebarComponent],
  templateUrl: './productlisst.component.html',
  styleUrl: './productlisst.component.css'
})
export class ProductlisstComponent {
   products:any[]=[] ; 
// use the same service to get the prosucts from the database 
constructor(private productlisst:ProductService) {} 
ngOnInit(): void {
  this.productlisst.getProducts().subscribe(
    data => this.products = data,
    error => console.error('Error fetching products', error)
  );
}
}
