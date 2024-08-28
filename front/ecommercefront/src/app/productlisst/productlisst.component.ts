import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { NgFor } from '@angular/common';
import { RouterLink ,Router, RouterLinkActive , RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { Location } from '@angular/common';
@Component({
  selector: 'app-productlisst',
  standalone: true,
  imports: [ NgFor,RouterLink , RouterLinkActive , RouterOutlet , SidebarComponent],
  templateUrl: './productlisst.component.html',
  styleUrl: './productlisst.component.css'
})
export class ProductlisstComponent {
   products:any[]=[] ; 
// use the same service to get the prosucts from the database 
constructor(private productlisst:ProductService , private router:Router , private location:Location) {} 
ngOnInit(): void {
  this.productlisst.getProducts().subscribe(
    data => this.products = data,
    error => console.error('Error fetching products', error)
  );
}
DeleteProduct(id: number) {
  this.productlisst.deleteProduct(id).subscribe(
    success => {
      console.log("product deleted");
      this.ngOnInit();
    },
    error => console.error("Error", error)
  );
}

  
}

