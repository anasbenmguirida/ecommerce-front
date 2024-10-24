import { Component } from '@angular/core';
import { ReactiveFormsModule , FormControl, FormGroup } from '@angular/forms';
import {  RouterLink ,RouterModule, RouterLinkActive } from '@angular/router';
import { Router } from '@angular/router';
import { userServive } from '../../../user.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-commande',
  standalone: true,
  imports: [ReactiveFormsModule ,HeaderComponent, RouterLink ,RouterModule, RouterLinkActive ],
  templateUrl: './commande.component.html',
  styleUrl: './commande.component.css'
})
export class CommandeComponent {
signin=new FormGroup({
  name : new FormControl('') ,
  email : new FormControl('') , 
  city : new FormControl('') ,
  address : new FormControl('') , 
  phone : new FormControl('') , 
  

}) ; 
constructor(private router: Router, private userService:userServive) { }
onSubmit() {
  if(this.signin.valid)
    {
      let userInfo=this.signin.value  ;
      this.userService.saveUser(this.signin.value).subscribe(
        (data: any) => {
          const token = data.accessToken;
          localStorage.setItem('userToken', token); 
          console.log('JWT Token stored:', token);
        },
        error=>console.log(error) ) ; 
       this.router.navigate(['/payment', {userInfo : JSON.stringify(userInfo)}]) ; 
    }
  
}

}
