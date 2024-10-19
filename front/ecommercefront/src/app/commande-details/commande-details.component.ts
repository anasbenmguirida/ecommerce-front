import { Component } from '@angular/core';
import { CommandeService } from '../../../commande.service';

@Component({
  selector: 'app-commande-details',
  standalone: true,
  imports: [],
  templateUrl: './commande-details.component.html',
  styleUrl: './commande-details.component.css'
})
export class CommandeDetailsComponent {
  constructor(private commandeService:CommandeService){}
listOfCommandes:any[]=[];
//b9ina hna 

id:number=2; 
ngOnInit(){
this.commandeService.getCommandeByid(this.id).subscribe(
  (data:any)=>{
    this.listOfCommandes=data
    console.log("im heeereeeeee" , this.listOfCommandes) ; 
})

}

}
