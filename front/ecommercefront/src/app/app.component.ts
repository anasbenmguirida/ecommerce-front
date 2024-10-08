import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from "./header/header.component";
import { HttpClientModule } from '@angular/common/http';
import { ProduitComponent } from "./produit/produit.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet,RouterLink , RouterLinkActive,
     HomepageComponent, CartComponent, HeaderComponent, HttpClientModule,ProduitComponent
     ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'

})
export class AppComponent {
  title = 'Tech Store';
}

