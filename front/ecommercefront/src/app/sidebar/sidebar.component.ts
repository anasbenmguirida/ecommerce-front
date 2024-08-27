import { Component } from '@angular/core';
import { RouterOutlet , RouterLink , RouterLinkActive , RouterModule} from '@angular/router';

@Component({
  selector: 'sidebar',
  standalone: true,
  imports: [RouterOutlet ,RouterLink , RouterLinkActive , RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

}
