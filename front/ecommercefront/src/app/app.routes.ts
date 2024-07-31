import { Routes } from '@angular/router';
import { ProduitComponent } from './produit/produit.component';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { Component } from '@angular/core';
import { CommandeComponent } from './commande/commande.component';
import { AddComponent } from './add/add.component';
import { PaymentComponent } from './payment/payment.component';
import { ConfirmComponent } from './confirm/confirm.component';

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
        path:'dashboard',
        component:DashbordComponent
    },
    {
        path:'login' , 
        component:LoginComponent
    },
    {
        path:'cart' , 
        component:CartComponent
    },
    {
    path:'commande' , 
    component:CommandeComponent
    } , 
    {
        path:'add-product' , 
        component:AddComponent
    },
    {
        path:'payment' , 
        component:PaymentComponent
    },
    {
        path:'confirme-commande' , 
        component: ConfirmComponent
    }

    
    
];
