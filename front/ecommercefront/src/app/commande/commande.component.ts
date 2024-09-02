import { Component } from '@angular/core';
import { ReactiveFormsModule , FormControl, FormGroup } from '@angular/forms';

import { Router } from '@angular/router';
import { userServive } from '../../../user.service';
@Component({
  selector: 'app-commande',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './commande.component.html',
  styleUrl: './commande.component.css'
})
export class CommandeComponent {
signin=new FormGroup({
  name : new FormControl('') ,
  email : new FormControl('') , 
  password : new FormControl('') ,
  adress : new FormControl('') , 
  phone : new FormControl('') , 
  

}) ; 
constructor(private router: Router, private userService:userServive) { }
onSubmit() {
  this.userService.saveUser(this.signin.value).subscribe(
    data=>console.log("user added succesfully"),
    error=>console.error("error" , error) 
  ) ; 
  if(this.signin.valid){
  this.router.navigate(['/payment'])
  }
  
}

}
