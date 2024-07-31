import { Component } from '@angular/core';
import { ReactiveFormsModule , FormControl, FormGroup } from '@angular/forms';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';
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
constructor(private registerService: RegisterService , private router: Router) { }
onSubmit() {
  if (this. signin.valid) {
    this.registerService.sendFormData(this.signin.value).subscribe(response => {
      console.log('Form submitted successfully!', response);
    });
    this.router.navigate(['/confirme-commande']) ; 
   
  }
}

}
