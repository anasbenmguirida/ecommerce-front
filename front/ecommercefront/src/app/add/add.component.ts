import { Component } from '@angular/core';
import { ReactiveFormsModule , FormControl , FormGroup } from '@angular/forms';
import { ProductService } from '../product.service';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { AdminheaderComponent } from '../adminheader/adminheader.component';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [ReactiveFormsModule , AdminheaderComponent],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
addproduct=new FormGroup({
  name : new FormControl('') , 
  description : new FormControl('') , 
  quantity : new FormControl('') , 
  price : new FormControl('') , 
  image:new FormControl()
 
  
}) ; 
constructor(private productService:ProductService){}
// retrieve  name from the form values 



addProduct(){ 
this.productService.saveProduct(this.addproduct.get('name')?.value , this.addproduct.get("description")?.value ,
 this.addproduct.get("quantity")?.value , this.addproduct.get("price")?.value , this.addproduct.get("image")?.value)
 .subscribe(
    data => console.log('Product added successfully:', data),
    error => console.error('Error adding product:', error)
  )
  console.log("product name  : " , this.addproduct.get("image")?.value)
}

onFileSelected(event: any): void {
  const file: File = event.target.files[0];
  this.addproduct.patchValue({
    image: file

    
  });
}

}
