import { Component } from '@angular/core';
import { ReactiveFormsModule , FormControl , FormGroup } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
addproduct=new FormGroup({
  nom : new FormControl('') , 
  description : new FormControl('') , 
  quantity : new FormControl('') , 
  price : new FormControl('') , 
  
}) ; 
constructor(private productService:ProductService){}

addProduct(){
  this.productService.saveProduct(this.addproduct.value).subscribe(
    data => console.log('Product added successfully:', data),
    error => console.error('Error adding product:', error)
  )
}
}
