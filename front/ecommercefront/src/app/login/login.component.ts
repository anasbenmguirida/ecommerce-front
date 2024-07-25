import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgFor],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  users: any[] = [];

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginService.getUser().subscribe(
      data => this.users = data,
      error => console.error('Error fetching products', error)
    );
    console.log(this.users);
  }
}
