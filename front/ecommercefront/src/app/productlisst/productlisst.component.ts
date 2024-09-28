import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { NgFor } from '@angular/common';
import { RouterLink ,Router, RouterLinkActive , RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ToastrService } from 'ngx-toastr';

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
constructor(private toaster : ToastrService ,  private productlisst:ProductService  , private router:Router) {} 
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
      this.toaster.success("Product is deleted  ! ") ; 
      this.ngOnInit();
    },
    error => console.error("Error", error)
  );
}
EditProduct(product:object){
  console.log(product);
  this.router.navigate(['/edit-product' , {product : JSON.stringify(product)}]) ; 
}
  
}

