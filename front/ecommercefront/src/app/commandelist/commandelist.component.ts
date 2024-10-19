import { Component, OnInit } from '@angular/core';
import { CommandeService } from '../../../commande.service';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { NgFor } from '@angular/common';
import { userServive } from '../../../user.service';
import { RouterLink , RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-commandelist',
  standalone: true,
  imports: [NgFor, SidebarComponent,RouterLink , RouterLinkActive, RouterOutlet],
  templateUrl: './commandelist.component.html',
  styleUrl: './commandelist.component.css'
})
export class CommandelistComponent implements OnInit {
  commandes: any[] = [];
  user:any[] = [] ; 

  constructor(private commandeService: CommandeService ,private UserService:userServive ) {}

  ngOnInit() {
    this.commandeService.getCommandes().subscribe(
      (data: any) => {
        this.commandes = data;
        console.log("commandes : "   , this.commandes)
        },
    
      (error: any) => console.log(error)
    );

   
   
    
  }
}