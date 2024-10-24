import { Component } from '@angular/core';
import { CommandeService } from '../../../commande.service';
import { NgFor } from '@angular/common';
import { userServive } from '../../../user.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { JsonPipe } from '@angular/common';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { AdminheaderComponent } from '../adminheader/adminheader.component';
@Component({
  selector: 'app-commande-details',
  standalone: true,
  imports: [NgFor,JsonPipe,SidebarComponent,AdminheaderComponent],
  templateUrl: './commande-details.component.html',
  styleUrl: './commande-details.component.css'
})
export class CommandeDetailsComponent {
  constructor(private toaster:ToastrService,private commandeService:CommandeService , private userService:userServive,private route: ActivatedRoute){}
listOfCommandes:any[]=[];
userId:any; 
totalPrice:number=0 
user:any; 

ngOnInit(){
    this.userId = this.route.snapshot.params['id'] ; 
    this.userId = parseInt(this.userId) ;
    this.commandeService.getCommandeByid(this.userId).subscribe(
      (data:any)=>{
        this.listOfCommandes=data
        this.userId=this.listOfCommandes[0].userId ; 
        this.listOfCommandes.forEach(commande=>this.totalPrice+=commande.price*commande.quantity) ; 
        console.log("im heeereeeeee" , this.listOfCommandes) ; 
    });

    this.userService.getUser(this.userId).subscribe(
      (data:any)=>{
        this.user=data ; 
        console.log("my user : "  , data)
      });
}
approveCommande(id:number){
  return this.commandeService.approveCommande(id).subscribe(
    (data:any)=>{
      console.log(data);
      this.toaster.success("this Commande is confimed now and a verification email is sent succesfully !") 
 }) ;
 
  
}
cancelCommande(id:number){
  return this.commandeService.cancelCommande(id).subscribe(
    (data:any)=>{
      console.log(data) ; 
      this.toaster.warning("this Commande is canceled !") 
    }
  ) ; 
}

}
