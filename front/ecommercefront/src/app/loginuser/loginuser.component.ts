import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup , FormControl } from '@angular/forms';
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
}
