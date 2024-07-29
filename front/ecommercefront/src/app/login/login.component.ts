import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
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

      

  constructor(private loginService: LoginService , private router: Router) { }
  onSubmit() {
    if (this. profileForm.valid) {
      this.loginService.sendFormData(this.profileForm.value).subscribe(response => {
        console.log('Form submitted successfully!', response);
        if(response === 'failed'){
          this.router.navigate(['/login']);
        }
        else{
          this.router.navigate(['/dashboard']);
        }
      });
      // check for message from the response
     
       
      
      
    }
  }
    
   
   
  
}
