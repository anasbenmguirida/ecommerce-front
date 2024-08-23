import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgFor } from '@angular/common';
import {ReactiveFormsModule , FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgFor, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  users: any[] = [];
   
  profileForm = new FormGroup({  
      email: new FormControl(''),  
      password: new FormControl(''),
      });

      

  constructor( private router: Router) { }
  onSubmit() {
    if (this. profileForm.valid) {

          this.router.navigate(['/dashboard']);
    };
  
     
       
      
      
    }
  }
    
   
   
  

