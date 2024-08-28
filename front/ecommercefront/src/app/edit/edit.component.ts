import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { ReactiveFormsModule , FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [ ReactiveFormsModule  ],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
 
 
  constructor(private route: ActivatedRoute , private productService:ProductService) {}
  product:any ; 
  ngOnInit() {
    this.route.params.subscribe(params => {
      let receivedObject = JSON.parse(params['product']);
      console.log('Received object:', receivedObject);
      this.product=receivedObject ; 
    });
  }
  EditProduct(product:any){
  this.productService.EditProduct(product).subscribe(
  (response) => {
    console.log(response);
    },


)
 
  }
}
