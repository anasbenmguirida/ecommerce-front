import { Component } from '@angular/core';
import { RouterLink ,  RouterOutlet , RouterLinkActive , RouterModule } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
@Component({
  selector: 'app-dashbord',
  standalone: true,
  imports: [RouterModule ,RouterOutlet, SidebarComponent],
  templateUrl: './dashbord.component.html',
  styleUrl: './dashbord.component.css'
})
export class DashbordComponent {

}
