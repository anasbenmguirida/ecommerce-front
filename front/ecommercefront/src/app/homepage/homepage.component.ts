import { Component } from '@angular/core';

@Component({
  selector: 'homepage',
  standalone: true,
  imports: [],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  appTitle = 'ChanTan Store';
  subTitle = 'Welcome to your store!';
  // connecting to the backend and display some of the product
  

}
