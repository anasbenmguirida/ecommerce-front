import { Component } from '@angular/core';
import { RouterLink , RouterLinkActive, RouterOutlet } from '@angular/router';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink , RouterOutlet , RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  productInChart:number =0 ; 
  constructor(private cartService:CartService){}
  ngOnInit(){
  this.productInChart=this.cartService.getNumberofproducts() ; 
  }
 



}
