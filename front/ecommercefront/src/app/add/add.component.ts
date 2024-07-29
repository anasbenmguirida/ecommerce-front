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
  quantite : new FormControl('') , 
  prix : new FormControl('') , 
  image : new FormControl('') , 
}) ; 
constructor(private productService:ProductService){}
addproduit(){
  this.productService.addproduct(this.addproduct.value).subscribe(response => {
    console.log('Product added', response) }); 
}
}
