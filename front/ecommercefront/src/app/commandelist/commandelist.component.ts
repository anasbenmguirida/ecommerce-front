import { Component } from '@angular/core';
import { CommandeService } from '../../../commande.service';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-commandelist',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './commandelist.component.html',
  styleUrl: './commandelist.component.css'
})
export class CommandelistComponent {
constructor(private commandeService:CommandeService){}
commandes:any ; 
getCommandes(){
  return this.commandeService.getCommandes().subscribe(
    (data) => {
      console.log(data);  
      this.commandes=data ; 
      },
      (error)=>{
        console.log("error : " , error) 
      }
  )
}
}
