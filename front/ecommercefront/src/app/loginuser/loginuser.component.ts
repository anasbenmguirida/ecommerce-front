import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup , FormControl } from '@angular/forms';
import { userServive } from '../../../user.service';
@Component({
  selector: 'app-loginuser',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './loginuser.component.html',
  styleUrl: './loginuser.component.css'
})
export class LoginuserComponent {
loginUsers=new FormGroup({
  email:new FormControl(''),
  password:new FormControl('')
})
constructor(private userService:userServive){}
loginUser(){
  this.userService.loginUser(this.loginUsers.value).subscribe(
    data=>console.log("logged in succed"),
    error =>console.error(error)
    

  )
}
}
