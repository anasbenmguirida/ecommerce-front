import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { NgFor} from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-confirm',
  standalone: true,
  imports: [NgFor],
  templateUrl: './confirm.component.html',
  styleUrl: './confirm.component.css'
})
export class ConfirmComponent {
  constructor(private cartservice:CartService  ) { }
  private userinfo:any=[] ; 
  listedesproduits:any []=this.cartservice.getItems() ; 
  
    

}
