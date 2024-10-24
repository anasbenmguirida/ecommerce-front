import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgFor } from '@angular/common';
import {ReactiveFormsModule , FormGroup, FormControl} from '@angular/forms';
import { userServive } from '../../../user.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgFor, ReactiveFormsModule,HeaderComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  users: any[] = [];
   
  profileForm = new FormGroup({  
      email: new FormControl(''),  
      password: new FormControl(''),
      });

      

  constructor(private userService:userServive ,  private router: Router) { }
  onSubmit() {
    if (this.profileForm.valid) {
      this.userService.loginUser(this.profileForm.value).subscribe(
        (data: any) => {
          // Assuming the token is returned in 'data.accessToken'
          const token = data.accessToken;
          localStorage.setItem('token', token); 
          console.log('JWT Token stored:', token);
          this.router.navigate(['/dashboard']);
        },
        error => {
          console.error('Error during login:', error);
        }
      );
    }
  }
  
}
    
   
   
  

