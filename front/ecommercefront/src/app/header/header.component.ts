import { Component, OnInit } from '@angular/core';
import { RouterLink , RouterLinkActive, RouterOutlet } from '@angular/router';
import { CartService } from '../cart.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink , RouterOutlet , RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  productInChart: number = 0;
 subscription: Subscription | undefined;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.productInChart = this.cartService.getNumberofproducts();
    this.subscription = this.cartService.getProductsObservable().subscribe(count => {
      this.productInChart = count;
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
 

  }

}
