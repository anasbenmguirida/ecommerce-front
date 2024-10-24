import { Component } from '@angular/core';
import { Router , RouterLink , RouterLinkActive , RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-adminheader',
  standalone: true,
  imports: [RouterLink   , RouterLinkActive , RouterOutlet],
  templateUrl: './adminheader.component.html',
  styleUrl: './adminheader.component.css'
})
export class AdminheaderComponent {

}
