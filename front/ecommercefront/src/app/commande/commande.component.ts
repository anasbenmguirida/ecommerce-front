import { Component } from '@angular/core';
import { ReactiveFormsModule , FormControl, FormGroup } from '@angular/forms';

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
constructor(private router: Router) { }
onSubmit() {
  
}

}
