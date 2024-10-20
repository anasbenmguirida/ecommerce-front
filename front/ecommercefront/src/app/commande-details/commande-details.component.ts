import { Component } from '@angular/core';
import { CommandeService } from '../../../commande.service';
import { NgFor } from '@angular/common';
import { userServive } from '../../../user.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-commande-details',
  standalone: true,
  imports: [NgFor],
  templateUrl: './commande-details.component.html',
  styleUrl: './commande-details.component.css'
})
export class CommandeDetailsComponent {
  constructor(private commandeService:CommandeService , private userService:userServive,private route: ActivatedRoute){}
listOfCommandes:any[]=[];
//b9ina hna 
userId:any; 

totalPrice:number=0 ; 
ngOnInit(){
this.userId = this.route.snapshot.params['id'] ; 

 console.log("id snapped" , this.userId)

 // convert the string of userId into a number
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
    console.log("my user : "  , data)
  }
)

}

}
