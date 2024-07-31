import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { NgFor} from '@angular/common';
import { CommonModule } from '@angular/common';
import { UserService } from '../user.service';

@Component({
  selector: 'app-confirm',
  standalone: true,
  imports: [NgFor],
  templateUrl: './confirm.component.html',
  styleUrl: './confirm.component.css'
})
export class ConfirmComponent {
  constructor(private cartservice:CartService  , private user:UserService) { }
  private userinfo:any=[] ; 
  listedesproduits:any []=this.cartservice.getItems() ; 
  ngOnInit(): void {
    this.user.getUserInfo().subscribe(
      data => this.userinfo = data,
      error => console.error('Error userinfo', error)
    );
  }

}
