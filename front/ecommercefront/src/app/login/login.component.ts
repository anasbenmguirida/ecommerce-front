import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgFor } from '@angular/common';
import {ReactiveFormsModule , FormGroup, FormControl} from '@angular/forms';
import { userServive } from '../../../user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgFor, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public tokens:any[] = JSON.parse(localStorage.getItem("token") || '[]' ); 
  users: any[] = [];
   
  profileForm = new FormGroup({  
      email: new FormControl(''),  
      password: new FormControl(''),
      });

      

  constructor(private userService:userServive ,  private router: Router) { }
  onSubmit() {
        if (this. profileForm.valid ) {
          this.userService.loginUser(this.profileForm.value).subscribe(
          data=>console.log('response from the backend  : ' , data) , 
          error=>console.error(error) , 
         
        ); 
          // store the token to the localstorage 
         
          localStorage.setItem('token' , JSON.stringify(this.tokens));
          this.router.navigate(['/dashboard']);
        };
  }
}
    
   
   
  

