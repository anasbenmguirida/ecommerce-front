import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-productdetail',
  standalone: true,
  imports: [],
  templateUrl: './productdetail.component.html',
  styleUrl: './productdetail.component.css'
})
export class ProductdetailComponent implements OnInit {
  
  constructor(private router:Router , private route:ActivatedRoute , private productService:ProductService){}
  product:any ;
  id:any ;  
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      // Retrieve the product data from the route state
      this.product = this.router.getCurrentNavigation()?.extras.state?.['data'];
      console.log("product"  , this.product)
    }); 
    
   
  }
 
}

