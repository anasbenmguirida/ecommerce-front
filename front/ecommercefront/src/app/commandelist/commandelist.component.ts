import { Component } from '@angular/core';
import { CommandeService } from '../../../commande.service';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { NgFor } from '@angular/common';
import { userServive } from '../../../user.service';
@Component({
  selector: 'app-commandelist',
  standalone: true,
  imports: [NgFor , SidebarComponent],
  templateUrl: './commandelist.component.html',
  styleUrl: './commandelist.component.css'
})
export class CommandelistComponent {
constructor(private commandeService:CommandeService ,private userService:userServive){}
commandes:any; 
ngOnInit():void{
  this.commandeService.getCommandes().subscribe(
   (data) => {
      console.log(data);  
      this.commandes=data ; 
      console.log("les cmmandes : " , this.commandes[0].userID)
              this.userService.getUser(this.commandes[0].userID).subscribe(
              (data) => {
                console.log(data);  
              },
                
              (error)=>{
                console.log("error : " , error) 
              }
            )
      },
      
      (error)=>{
        console.log("error : " , error) 
      }
  )
  

}
}
