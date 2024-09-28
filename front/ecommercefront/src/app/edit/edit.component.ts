import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { ReactiveFormsModule , FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [ ReactiveFormsModule  ],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
 editForm =new FormGroup({
  id:new FormControl(),
  name:new FormControl(''),
  description : new FormControl(''),
  quantity : new FormControl(''),
  price:new FormControl('')
 }) ; 
 
  constructor( private router:Router  , private route: ActivatedRoute , private toaster:ToastrService, private productService:ProductService) {}
  product:any ; 
  ngOnInit() {
    this.route.params.subscribe(params => {
      let receivedObject = JSON.parse(params['product']);
      console.log('Received object:', receivedObject);
      this.product=receivedObject ; 
    });
  }
  EditProduct(id:number){
    this.editForm.value.id=id  ; 
    console.log(this.editForm.value)
    
  this.productService.EditProduct(this.editForm.value).subscribe(
  (response) => {
    console.log(response);
    },


)
this.toaster.success("Product edited succesfully ! ") ; 
this.router.navigate(["/product-list"])  ; 
 
  }
}
