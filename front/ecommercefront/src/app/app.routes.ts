import { Routes } from '@angular/router';
import { ProduitComponent } from './produit/produit.component';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
    {
        path:'produits' , 
        component:ProduitComponent
    } , 
    {
        path:'',
        component:HomepageComponent
    },
    {
        path:'login' , 
        component:LoginComponent
    },
    {
        path:'cart' , 
        component:CartComponent
    }
    
    
    
];
